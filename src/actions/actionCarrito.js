import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { loadCarrito } from '../helpers/loadCarrito'
import { typesProductos } from '../types/types'



export const NewProCarro = (prod, desc, pre, cant, img) => {
    return async (dispatch, getState) => {
        const uid = getState().login.id;
        const newProducto = {
            prod,
            desc, 
            pre, 
            cant, 
            img
           
        }
        await addDoc(collection(db, "productos"), {newProducto});
        dispatch(ListarCar(uid))

    }
}


export const addNewProCarro = (producto) => ({
    type: typesProductos.carrito,
    payload: {producto}
})

export const ListarCar = uid => {

    return async (dispatch) => {
    
        const cards = await loadCarrito(uid)
         dispatch(addNewProCarro(cards))
    }
}
export const DeleteProCarro = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().login.id;
        await deleteDoc(doc(db, "productos", `${id}`));
        dispatch(ListarCar(uid))
    }
}

export const eliminarCarrito = (id, all = false) => {

    return async (dispatch) => {
    console.log(id, all);
    if(all){
        dispatch({type: typesProductos.remover_todo, payload:id})
    } else{
        dispatch({type: typesProductos.remover_uno, payload:id})
    }
    }
    
};
