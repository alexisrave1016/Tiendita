import { TYPES } from "../actions/actionCarritoNuevo";

export const shoppingInitialState = {
products:[
    {id:1,name:'producto1',price:1000},
    {id:2,name:'producto2',price:3000},
    {id:3,name:'producto3',price:5000},
    {id:4,name:'producto4',price:6000},
    {id:5,name:'producto5',price:8000},
    {id:6,name:'producto6',price:2000},

],
cart:[]
}

export function shoppingReducer(state,action){
    switch(action.type){
        case TYPES.agregarArticuloCarrito:{
            let newItem= state.products.find(product=>product.id===action.payload);
            // console.log(newItem)
            let itemInCart= state.cart.find(item=>item.id===newItem.id)
            return itemInCart 
            ? {
                ...state,
                cart: state.cart.map(item=> item.id===newItem.id
                    ?{...item, quantity: item.quantity+1}
                    :item)
            }
            :{...state, 
                cart:[...state.cart, {...newItem, quantity:1}]}

        }
        case TYPES.removerArticuloCarrito:{
            let itemToDelete= state.cart.find(item=> item.id===action.payload);

            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map((item)=> item.id===action.payload
                    ?{...item, quantity: item.quantity -1}
                    : item),
            }
            : {
                ...state,
                cart: state.cart.filter((item)=> item.id !== action.payload)
            }
        }
        case TYPES.removerTodoArticulosiguales:{
            return {
                ...state,
                cart: state.cart.filter((item)=> item.id !== action.payload)
            }
        }
        case TYPES.removerTodoCarrito:
            return shoppingInitialState;
            
        
        default:
        return state
    }
}
