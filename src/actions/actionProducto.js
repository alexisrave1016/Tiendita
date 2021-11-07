import { typesProductos } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs, query, where, doc, deleteDoc ,updateDoc} from "@firebase/firestore";
import Swal from "sweetalert2";
import { LoadProducto } from "../helpers/LoadProducto";

export const editar = (producto) => {
    return async (dispatch, getSate) => {
        const id= getSate().login.id;
        console.log(producto)

        const editar={
            id: producto.id,
            producto: producto.prod,
            descripcion: producto.desc,
            precio: producto.pre,
            cantidad: producto.cant,
            imagen: producto.img
        }

        const cardFire = {...editar}
        delete cardFire.id

        Swal.fire({
            title:'Uploading...',
            text:'Please wait ...',
            allowOutsideClick: false, 
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const docRef = await doc(db, "productos",`${producto.id}`)

        const updateTimes= await updateDoc(docRef,editar)
        console.log(updateTimes)

        Swal.fire('Saved', producto.producto, 'success');
        dispatch(Listar(id))



    
}
}

export const Listar =(id)=>{
    return async (dispatch)=>{
        const producto = await LoadProducto(id)
        dispatch(setproductos(producto))
    }
}

export const setproductos= (producto) =>({
    type: typesProductos.edit,
    payload: {
        producto
    }
})

export const editarProductoSincrono= (id, producto)=>{
    return{
        type: typesProductos.edit,
        payload: {
            id,
            ...producto
        }
    }
}

//------------eliminar------------

export const eliminarAsincrono = (id) => { //este id es latercer consicion del whre que es con lo q lo vamosa  comparar, este y el del where tienen que ser igual
    return async (dispatch)=>{
        const articulos =collection(db, "productos")
        const q = query(articulos, where('id','==',id))//aca tengo q cambiar por lo q quiero eliminar uando modifique el archivo
        const resultado = await getDocs(q)
        resultado.forEach((elem)=>{
            deleteDoc(doc(db,"productos",elem.id))
        })
        
       dispatch(eliminarProducto(id)) 
    }
}


export const eliminarProducto = (id) => {
    return{
        type: typesProductos.eliminar,
        payload: id,
    }
   
}



//-------------listar--------------

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
export const registerProducto = (id,prod,desc,pre,cant,img)=>{

    return(dispatch)=>{
        const newProducto ={
            id,
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