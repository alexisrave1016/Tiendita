import React from 'react'
import { Button } from './Disenos'
import Modal from '../components/Modal'
import { useModal } from '../hooks/useModal'
import '../styles/modalPintar.css'
import { ProductoRelacionadoviveres } from './ProductoRelacionadoviveres'
import { ProdutoRelacionadoFrutas } from './ProdutoRelacionadoFrutas'

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
              <Button onClick={openModal}>Agregar</Button>
              </div>
            </div>
            
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <div className="modalContainerTotal">
                    <div className="modalProductoSeleccionado">
                        <div className="modalImagenProducto">
                            <img className="imagenProducto" src={Imagen} alt="no disponible" srcset="" />
                        </div>
                        <div className="modalDescripcion">
                            <h5 className="tituloProducto">{Producto}</h5>
                            <span className="tituloPrecio">$ {Precio}</span>
                            <span className="iva">precio con iva incluido</span>
                            <p className="descripcionProducto">{Descripcion}</p>
                            {Tipo=='Fruta'
                                ? <div className="modalSeleccionCaracteristicas">
                                
                                <div className="opcionesFrutas">
                                    <span className="titulo_selecion">Selecciona la madurez que deseas</span>
                                <select className="selecionDeseada" name="madurez">
                                    <option value="titulo">Por elegir</option>
                                    <option value="valor1">Maduro (Para hoy)</option>
                                    <option value="valor2">Normal (3-5 días)</option>
                                    <option value="valor3">Verde (7 días)</option>
                                </select>
                                </div>
                                
                                <div className="modal_botones_agregar">
                                <button className="botonModificar">- 250 g + </button> 
                                <Button>Agregar</Button>
                                </div>
                            </div>
                            :<Button>Agregar</Button>}
                           
                        </div>
                    </div>
                    <div className="modal_productos_relacionados">
                        <h5>Productos Relacionados</h5>
                        {Tipo=='Fruta'
                        ?<ProductoRelacionadoviveres/>
                        :<ProdutoRelacionadoFrutas/>
                    }

                    </div>

                </div>
            </Modal>
          
        </div>
    )
}

export default Card