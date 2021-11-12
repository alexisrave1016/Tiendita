import React from "react";
import { Button } from "./Disenos";
import "../styles/modalPintar.css";



const Card = (props) => {
  // console.log('soy props inicio', props)
  const {Producto, Precio, Imagen } =
    props.card;

  const { handleOnClick } = props;

 

  return (
    <div className="container_card">
      <div className="card_productos">
        <div className="img_producto">
          <img
            className="imagenCard"
            src={Imagen}
            alt="no disponible"
            srcset=""
          />
        </div>
        <div className="contenido_productos">
          <span>$ {Precio}</span>
          <span>{Producto}</span>
          <Button onClick={()=>handleOnClick(props.card)}>Agregar</Button>
        </div>
      </div>

      
    </div>
  );
};

export default Card;
