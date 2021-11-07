import { typesProductos } from "../types/types";

const initialState= {
    productos:[]
}

export const productosReducer= (state= initialState, action) => {

    switch (action.type) {
        case typesProductos.register:
            return{
                productos: [action.payload]
            }
        case typesProductos.list:
            return{
                productos: {...action.payload}
            }   
    
        default:
            return state
            
    }

}