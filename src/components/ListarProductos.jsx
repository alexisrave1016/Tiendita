import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { editar, editarProductoSincrono, eliminarAsincrono } from '../actions/actionProducto';
import { useForm } from '../hooks/useForm';
import { Button } from './Disenos';

// import {eliminarAsincrono} from '../actions/actionProducto'
 
export const ListarProductos = () => {
    const dispatch = useDispatch()
    const [editForm,setEditForm]=useState(false)
    const [values, setValues] = useForm({
        id:'',
        producto:'',
        descripcion:'',
        precio:'',
        cantidad:'',
        imagen:''
    })


    const {productos} = useSelector(store => store.producto);
    console.log('soy productos',productos)
    
    const handleEdit= (producto)=>{
        dispatch(editarProductoSincrono( producto.id ,producto))
        setEditForm(true)
        setValues({
            ...producto
        })
    }

    const handlePut = async() =>{
        dispatch(editar(values))
        
    }

    
    return (
        <div className="containerListarProducto">
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Codigo Producto</th>
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
                                <td>{elem.id}</td>
                                <td>{elem.prod}</td>
                                <td>{elem.desc}</td>
                                <td>{elem.pre}</td>
                                <td>{elem.cant}</td>
                                <td><img src={elem.img} alt="no disponible" width='50px' /></td>
                                <td><button onClick={()=>dispatch(eliminarAsincrono(elem.id))}>Eliminar</button></td>
                                <td><button onClick={handleEdit}>Editar</button></td>
                                <td></td>
                            </tr>
                        )))
                        :<h5>Datos no disponible</h5>
                        } 
                       { console.log('soy map segundo',productos)}
                </tbody>
            </Table>
            <Button type="submit" onClick={handlePut}>Guardar</Button>
        </div>  
    )
}
