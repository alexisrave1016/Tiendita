import React from 'react'
import { Button } from './Disenos'
import Modal from '../components/Modal'
import { useModal } from '../hooks/useModal'

const Card = (props) => {

    const{
        id,
        Producto,
        Descripcion,
        Tipo,
        Precio,
        Imagen
        }=props.card
           //modal

    const [isOpenModal,openModal,closeModal]= useModal(false)
   
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
            <button onClick={openModal}></button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <h3>hola modal</h3>
                <img src="Tiendita.png" alt="no disponible" srcset="" />
            </Modal>
          
        </div>
    )
}

export default Card