import React, { useEffect} from 'react'
import { Button } from './Disenos'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/actionLogin'
import { useForm } from '../hooks/useForm'
import { fileUpload } from '../helpers/FileUpload'
import { listProducto, registerProducto } from '../actions/actionProducto'
import { ListarProductos } from './ListarProductos'

export const Productos = ({history}) => {

    const dispatch = useDispatch()
    

    const [ values, handleInputChange, reset] = useForm({
        id:'',
        producto:'',
        descripcion:'',
        precio:'',
        cantidad:'',
        imagen:''
    })

    let{id,producto,descripcion,precio,cantidad,imagen}= values;

   

    const handleRegistro=(e)=>{
        e.preventDefault();
        dispatch(registerProducto(id,producto,descripcion,precio,cantidad,imagen));
        reset();

    }

    const handleLogout=()=>{
        dispatch(logout())
        history.replace('./login')
    }

    const handlePictureClick= ()=>{
        document.querySelector('#fileSelector').click();
        
    }
    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            imagen = response
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    useEffect(() => {
      dispatch(listProducto())
    }, [dispatch])

   
    return (
        <div className="containerListar">
            <form onSubmit={handleRegistro}>
                <h1>Producto</h1>
                <div className="form-group">
                <div className="form-group col-md-4">
                        <label htmlFor="nombres">Codigo Producto</label>
                        <input className="form-control" 
                        type="text" 
                        name="id" 
                        id="id" 
                        value={id}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="nombres">Nombres</label>
                        <input className="form-control" 
                        type="text" 
                        name="producto" 
                        id="producto" 
                        value={producto}
                        onChange={handleInputChange}
                        />
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="descripcion">Descripcion del Producto</label>
                        <input className="form-control" 
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        value={descripcion}
                        onChange={handleInputChange}
                        />
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="precio">Precio</label>
                        <input className="form-control" 
                        type="number" 
                        name="precio" 
                        id="precio"
                        value={precio}
                        onChange={handleInputChange}/>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="precio">Cantidad</label>
                        <input className="form-control" 
                        type="number" 
                        name="cantidad" 
                        id="cantidad"
                        value={cantidad}
                        onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{display:'none'}}
                            onChange={handleFileChanged}
                        />
 
                        <button className="btn btn-success" type="button" onClick={handlePictureClick}>Imagen</button>
                    </div>
                    <button className="btn btn-success" type="submit">Guardar</button>
 
                <Button onClick={handleLogout}>Cerrar sesion</Button>
 
                </div>
            </form>
            <ListarProductos />
        </div>
    )
}
