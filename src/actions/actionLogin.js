import { types } from "../types/types";
import {getAuth, signInWithPopup, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { google,facebook} from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

//logou - cerrar sesion

export const logout= () =>{
    return(dispatch)=>{
        const auth= getAuth();
        signOut(auth)
        .then(resp=>{
            dispatch(logoutSincrono())
        })
        .catch(e=>{
            console.log(e);
        })
    }
}

export const logoutSincrono=()=>{
    return{
        type: types.logout
    }
}

export const loginEmailPassword= (email,password)=>{
    return(dispatch)=>{
        const auth= getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{
            dispatch(loginSincrono(user.uid, user.displayName))
            
            console.log('bienvenido señor usuario')
            Swal.fire(
               { title:`bienvenido ${email}` ,
                text: 'Que gusto tenerte en Tiendita',
                icon: 'success',
                confirmButtonText:'Confirmar'
            }
            )
        
            // window.location.href = "./";
        })
        .catch(e=>{
            console.log(e)
            console.log('el usuario no existe')
            Swal.fire(
                { title:`${email}`,
                 text: 'No esta registrado, o la contraseña es incorrecta',
                 icon: 'error',
                 confirmButtonText:'Confirmar'
             }
             )
        })
    }

}


export const loginGoogle= () =>{

    return(dispatch) =>{
        const auth= getAuth();
        signInWithPopup(auth,google)
        .then(({user})=>{
            dispatch(loginSincrono(user.uid,user.displayName,user.photoURL))
            
        })
        .catch(e=>{
            console.log(e)
        })
    }
}

export const loginFacebook= () =>{

    return(dispatch) =>{
        const auth= getAuth();
        signInWithPopup(auth,facebook)
        .then(({user})=>{
            dispatch(loginSincrono(user.uid,user.displayName,user.photoURL))
        })
        .catch(e=>{
            console.log(e)
        })
    }
}

export const loginSincrono=(id, displayname,photo)=>{

    return{
        type: types.login,
        payload:{
            id,
            displayname,
            photo
        }
    }

}