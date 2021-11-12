import { typesProductos } from "../types/types";

const initialState= {
    productos:[],
    editarProducto:{
        id:'',
        prod:'',
        desc:'',
        pre:'',
        cant:'',
        img:''

    }
}

export const productosReducer= (state= initialState, action) => {

    switch (action.type) {
        case typesProductos.register:
            return{
                productos: [action.payload]
            }
        case typesProductos.list:
            return{
                productos: [...action.payload]
            }  
        case typesProductos.eliminar:
            return{
                productos: state.productos.filter(prod => prod.id !== action.payload)
                }   
        case typesProductos.edit:
            return {
                ...state, //mirar si
                productos: [action.payload]

                }  
        case typesProductos.productos:
            return{
                productos:[action.payload]
            }                 
    
        default:
            return state
            
    }

}