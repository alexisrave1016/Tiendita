import React, { useReducer, useState } from 'react'
import { TYPES } from '../actions/actionCarritoNuevo'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import Articulos from './Articulos'
import CarrItem from './CarrItem'


const CarritoNuevo = () => {
    
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const{products,cart}=state
    const [selec, setSelec] = useState('')
    
 
    const addTocart=(id)=>{
        // console.log(id)
        dispatch({type: TYPES.agregarArticuloCarrito, payload:id});
    };
    
    const delFromCart=(id, all=false)=>{
        // console.log(id, all);
        if(all)
        {dispatch({type: TYPES.removerTodoArticulosiguales, payload:id})
        }else{
            dispatch({type: TYPES.removerArticuloCarrito, payload:id})
        }

    };

    const clearCart=()=>{
        dispatch({type: TYPES.removerTodoCarrito})
    };
    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="box">
                {
                    products.map((product)=>(<Articulos
                    key={product.id}
                    data={product}
                    addToCart={addTocart}
                    />))
                }
            </article>
            <h3>carrito</h3>
            <article className="box"></article>
            {
                cart.map((item,index)=> <CarrItem
                key={index}
                data={item}
                delFromCart={delFromCart}
                />)
            }
            <button onClick={clearCart}>Limpiar carrito</button>
            
        </div>
    )
}

export default CarritoNuevo
