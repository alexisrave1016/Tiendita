import { typesProductos } from "../types/types";

const initialState = {
    carrito: []
}

export const carritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProductos.carrito:
            return {
                carrito: action.payload
            }
            case typesProductos.remover_uno: {
                let itemDelete = state.carrito.find(item => item.id === action.payload);
    
                return itemDelete.quantity > 1 
                ? {
                    ...state,
                    carrito: state.carrito.map((item) => 
                        item.id === action.payload 
                        ? {...item, quantity: item.quantity - 1}
                        : item
                        ),
                } 
                : {
                    ...state,
                    carrito: state.carrito.filter((item) => item.id !== action.payload),
                };
            }
    
            case typesProductos.remover_todo: {
                return {
                    ...state,
                    carrito: state.carrito.filter((item) => item.id !== action.payload),
                }
            }
    
            case typesProductos.limpiar_carrito:  
            return initialState;

        default:
            return state;
    }

}

