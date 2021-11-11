const CarrItem = ({data,delFromCart}) => {
    let{id,name,price,quantity}= data;
console.log('soy eliminar', delFromCart)
    return (
        <div style={{}}>
            <h4>{name}</h4>
            <h5>{price} x {quantity} = $ {price*quantity}</h5>
            
            <button onClick={()=>delFromCart(id)}>Eliminar uno</button>
            <button onClick={()=>delFromCart(id,true)}>Eliminar todo</button>
        </div>
    )
}

export default CarrItem
