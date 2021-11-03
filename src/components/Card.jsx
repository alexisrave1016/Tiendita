import React from 'react'
import { Button } from './Disenos'

const Card = (props) => {

    const{
        id,
        Producto,
        Descripcion,
        Tipo,
        Precio,
        Imagen
        }=props.card
    return (
        <div className="container_card">
            <div className="card_productos">
                <div className="img_producto">
                    <img src={Imagen} alt="no disponible" srcset="" />
                </div>
                <div className="contenido_productos">
              <span>$ {Precio}</span> 
              <span>{Producto}</span> 
              <Button>Agregar</Button>
              </div>
            </div>
            
        </div>
    )
}

export default Card
