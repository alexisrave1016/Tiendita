import React from 'react'
import { Button } from './Disenos'
import Modal from '../components/Modal'
import { useModal } from '../hooks/useModal'
import '../styles/modalPintar.css'
import { ProdutoRelacionadoFrutas } from './ProdutoRelacionadoFrutas'


const Card = (props) => {
// console.log('soy props inicio', props)
    const{
        id,
        Producto,
        Descripcion,
        Tipo,
        Precio,
        cantidad,
        Imagen,
        }=props.card

     

    const{
        productos
    }=props

    const [isOpenModal,openModal,closeModal]= useModal(false)
    let carritoAgregar=[]
    if(localStorage.getItem("carrito")){
        carritoAgregar=JSON.parse(localStorage.getItem("carrito"))
        
    }
    const agregarCarrito=(id)=>{
        
        if(carritoAgregar.length){
            carritoAgregar.forEach(elem=>{
                if(elem.id===id){elem.cantidad ++
                }else{carritoAgregar.push(productos.find(elem=>elem.id===id))}
            })

        }else{
            carritoAgregar.push(productos.find(elem=>elem.id===id))
            carritoAgregar.forEach(elem=>{
                elem.cantidad ++
            })
        }
        
        localStorage.setItem("carrito",JSON.stringify(carritoAgregar))
        console.log(carritoAgregar)
// console.log(productos.find(elem=>elem.id))
    }
    
    return (
        <div className="container_card">
            <div className="card_productos">
                <div className="img_producto">
                    <img className="imagenCard" src={Imagen} alt="no disponible" srcset="" />
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
                            {Tipo==='Fruta'
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
                                            <Button onClick={()=>agregarCarrito(id)}>Agregar</Button>
                                        </div>
                                </div>
                            :<Button>Agregar</Button>}
                           
                        </div>
                    </div>
                    <div className="modal_productos_relacionados">
                        <h5>Productos Relacionados</h5>
                        <div className="productosRelacionasdosMostrar">
                        {
                        productos?.length >0 && (
                            <ProdutoRelacionadoFrutas 
                            productosTipo={productos.filter((producto)=>
                                producto.Tipo===Tipo && producto.id!==id
                            )}
                            />

                        )
                       
                        
                        }
                        </div>
                    </div>

                </div>
            </Modal>
          
        </div>
    )
}

export default Card