import { ProdutoRelacionadoFrutas } from "./ProdutoRelacionadoFrutas"
import { Button } from "./Disenos";
import Modal from "../components/Modal";
import "../styles/modalPintar.css";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ModalProducto = (props) => {

    const{isOpenModal,producto,productos,closeModal,onClick}=props
    const {id,Imagen,Precio,Producto,Tipo,Descripcion,cantidad}=producto

    
    
     let carritoAgregar = [];
  if (localStorage.getItem("carrito")) {
    carritoAgregar = JSON.parse(localStorage.getItem("carrito"));
  }
  const agregarCarrito = (id) => {

     
        const elemento= carritoAgregar.find(elem=>elem.id===id)
        if(elemento){
        
                    elemento.cantidad++; 
                    Swal.fire(
                      {
                     title:`Productos selecionados ${elemento.cantidad}`,
                      // title:`Producto añadido correctamente`,
                      
                        text: `${elemento.Producto}`,
                       icon: 'success',
                       confirmButtonText:'Confirmar'
                   })
    } else {
        const elemento= productos.find((elem) => elem.id === id)
        carritoAgregar.push(elemento)
        elemento.cantidad++;
        Swal.fire(
          {
            //  title:`Productos selecionados ${elemento.cantidad}`,
          title:`${elemento.Producto} añadido correctamente`,
           icon: 'success',
           confirmButtonText:'Confirmar'
       })
        }

    localStorage.setItem("carrito", JSON.stringify(carritoAgregar));
    
  };
  useEffect(() => {
    
  }, [])
  
    return (
        
           <Modal isOpen={isOpenModal} closeModal={closeModal} cantidad={cantidad}>
        <div className="modalContainerTotal">
          <div className="modalProductoSeleccionado">
            <div className="modalImagenProducto">
              <img
                className="imagenProducto"
                src={Imagen}
                alt="no disponible"
                srcset=""
              />
            </div>
            <div className="modalDescripcion">
              <h5 className="tituloProducto">{Producto}</h5>
              <span className="tituloPrecio">$ {Precio}</span>
              <span className="iva">precio con iva incluido</span>
              <p className="descripcionProducto">{Descripcion}</p>
              {Tipo === "Fruta" ? (
                <div className="modalSeleccionCaracteristicas">
                  <div className="opcionesFrutas">
                    <span className="titulo_selecion">
                      Selecciona la madurez que deseas
                    </span>
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
              ) : (
                <Button onClick={()=>agregarCarrito(id)}>Agregar</Button>
              )}
            </div>
          </div>
          <div className="modal_productos_relacionados">
            <h5 className="tituloCabezera">Productos Relacionados</h5>
            <div className="productosRelacionasdosMostrar">
              {productos?.length > 0 && (
                <ProdutoRelacionadoFrutas
                  productosTipo={productos.filter(
                    (producto) => producto.Tipo === Tipo && producto.id !== id
                  )}
                  handleOnClick={onClick}
                />
              )}
            </div>
          </div>
        </div>
      </Modal> 
       
    )
}

export default ModalProducto
