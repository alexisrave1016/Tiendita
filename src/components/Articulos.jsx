import React from 'react'

const Articulos = ({data,addToCart}) => {
    const {id,name,price}=data
    console.log('soy la funsion',addToCart)
    return (
        <div style={{border:"thin solid gray",padding:"1rem"}}>
            <h4>{name}</h4>
            <h5>{price}</h5>
            <button onClick={()=>addToCart(id)}>Agregar</button>
        </div>
    )
}

export default Articulos
