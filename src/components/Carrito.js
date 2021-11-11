import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProCarro } from '../actions/actionCarrito';
import { Button, LinkRuta } from './Disenos';




const Carrito = () => {
    const [historyCarrito, setHistoryCarrito] = useState([])
    const [TotalCantidad, setTotalCantidad] = useState(0)
    

    
    useEffect(() => {
        if(localStorage.getItem("carrito")){
            let carritoAgregarFisico=JSON.parse(localStorage.getItem("carrito")),
            initialStateCantidad = carritoAgregarFisico.reduce((acc, {cantidad}) => acc + cantidad, 0);
            setHistoryCarrito(carritoAgregarFisico)
            setTotalCantidad(initialStateCantidad)
        }
    }, [])
    console.log(historyCarrito)
    
    
    return (
        <div className="containerCarrito">
              <Table striped bordered hover className="tab">
                <thead>
                    <tr>
                        <th className="imagen">img</th>
                        <th className="encab">Producto</th>
                        <th className="enca">Precio</th>
                        <th className="enca">Cantidad</th>
                        <th className="enca">Sub-Total</th>
                    </tr>

                </thead>
                <tbody>
                    
                    {
                        (historyCarrito) ?
                            (

                                historyCarrito.map((element, index) => (

                                    <tr key={index}>
                                        <td ><img src={element.Imagen} alt="" width="50px" /></td>
                                        <td className="producto">{element.Producto}</td>
                                        <td className="precio">$ {element.Precio}</td>
                                        <td className="cantidad">{element.cantidad}</td>
                                        
                                        <td>
                                            <Button className="btn btn-danger">Eliminar</Button>
                                        </td>

                                    </tr>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                    <tfoot>
                        <tr>
                            <td>Total: {TotalCantidad}</td>
                        </tr>
                    </tfoot>
                    <tr>
                    <th colspan="4" scope="col" className="text-right total"
                    style={{color:"black"}}
                    >TOTAL :</th>
                    <th scope="col">
                        <p id="total"
                         style={{color:"black"}}
                        >{}total</p>
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
