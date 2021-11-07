import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

// import {eliminarAsincrono} from '../actions/actionProducto'
 
export const ListarProductos = () => {

    const {productos} = useSelector(store => store.producto);
    console.log('soy productos',productos)
    
    // const dispatch = useDispatch()
    
    return (
        <div>
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>producto</th>
                        <th>descripcion</th>
                        <th>precio</th>
                        <th>cantidad</th>
                        <th>imagen</th>
                    </tr>
                </thead>
                <tbody>
                { console.log('soy map primero',productos)}
                        {
                        
                        (productos)?
                        (productos.map((elem,index) => (
                            <tr key={index}>
                                <td>{elem.prod}</td>
                                <td>{elem.desc}</td>
                                <td>{elem.pre}</td>
                                <td>{elem.cant}</td>
                                <td><img src={elem.img} alt="no disponible" width='50px' /></td>
                                <button>Eliminar</button>
                            </tr>
                        )))
                        :<h5>Datos no disponible</h5>
                        } 
                       { console.log('soy map segundo',productos)}
                </tbody>
            </Table>
        </div>  
    )
}
