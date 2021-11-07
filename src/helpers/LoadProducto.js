import { db } from '../firebase/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'


export const LoadProducto = async (id) => {

    const data = await getDocs(collection(db,"productos"));
    let productoLista = [];

    data.forEach(hijo=>{

      productoLista = {
                            id: hijo.id,
                          ...hijo.data()
                        }
    })


    return productoLista
}