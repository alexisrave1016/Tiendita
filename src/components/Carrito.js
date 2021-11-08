import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProCarro } from '../actions/actionCarrito';
import { Button, LinkRuta } from './Disenos';



const Carrito = () => {
    const carrito = useSelector(state => state.carrito)
    let prod = carrito.carrito?.producto
    const dispatch = useDispatch();
    let total= 0
    prod?.forEach((element) => {
       let subTotal= element.producto.newProducto.cantidad * element.producto.newProducto.precio * 1000 
      total += subTotal

    })


    return (
        <div className="containerCarrito">
              <Table striped bordered hover className="tab">
                <thead>
                    <tr>
                        <th></th>
                        <th className="encab">Producto</th>
                        <th className="enca">Precio</th>
                        <th className="enca">Cantidad</th>
                        <th className="enca">Sub-Total</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        (prod) ?
                            (

                                prod.map((element, index) => (

                                    <tr key={index}>
                                        <td ><img src={element.producto.newProducto.img[0].response  } alt="" width="50px" /></td>
                                        <td className="nompro">{element.producto.newProducto.nom}</td>
                                        <td className="precio">$ {element.producto.newProducto.precio}</td>
                                        <td className="cantidad">{element.producto.newProducto.cantidad}</td>
                                        <td className="cantidad"> $ {element.producto.newProducto.cantidad * element.producto.newProducto.precio*1000}</td>
                                        <td>
                                            <Button className="btn btn-danger"
                                            onClick={() =>{dispatch(DeleteProCarro(element.id))}}
                                      >Eliminar</Button>
                                        </td>

                                    </tr>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                    <tr>
                    <th colspan="4" scope="col" className="text-right total"
                    style={{color:"black"}}
                    >TOTAL :</th>
                    <th scope="col">
                        <p id="total"
                         style={{color:"black"}}
                        >{total}</p>
                    </th>
                    <td></td>
                </tr>
                </tbody>
            </Table>
           
           <div className="botonesSeleccion">
           <Button className="btn btn-warning next">finalizar compra</Button>
            

            <LinkRuta to="/portada">
                <Button className="btn btn-primary next">Volver</Button>
            </LinkRuta>
            
           </div>
            
        </div>
    )
}

export default Carrito
