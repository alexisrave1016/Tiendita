import { typesProductos } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs,  } from "@firebase/firestore";

export const listProducto= ()=>{
    return async(dispatch) =>{
       const datos= await getDocs(collection(db,"productos"));
       
       const productosArray=[];
       datos.forEach((doc)=>{
          productosArray.push({...doc.data()})
       })
       dispatch(list(productosArray))
       console.log('soy producto array',productosArray)
    }
}


export const list = (productos)=>{
    return{
        type: typesProductos.list,
        payload: productos
    }
}

// ----------creacion----------------
export const registerProducto = (prod,desc,pre,cant,img)=>{

    return(dispatch)=>{
        const newProducto ={
            prod,
            desc,
            pre,
            cant,
            img
        }
        addDoc(collection(db,"productos"),newProducto)
        .then(resp=>{
            dispatch(registerProductoSincrono(newProducto))
        }).catch(e=>{
            console.log(e)
        })
    }

}


export const registerProductoSincrono= (producto)=>{
    return{
        type: typesProductos.register,
        payload: producto
    }
}