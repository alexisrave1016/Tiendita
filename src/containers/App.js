import axios from 'axios'
import React from 'react'
import { useState, useEffect} from 'react'
import Card from '../components/Card'
import { Navbar } from '../components/Navbar'
import {useModal} from '../hooks/useModal'
import ModalProducto from "../components/ModalProducto";


const url='https://api-alexisrave-anime.herokuapp.com/tienda'

export const App = () => {
    
    const [productos, setProductos] = useState([])
    const [producto,setProducto]= useState({id:'',Imagen:'',Precio:'',Producto:'',Tipo:'',Descripcion:''})
    const [isOpenModal, openModal, closeModal] = useModal(false);
    
    
    const peticionesGet= async()=>{
        await axios.get(url)
        .then(resp=>{

            setProductos(resp.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    const selectProd = (prod)=>{
        setProducto(prod);
        openModal()
    }

    const selectRelationProd=(prod)=>{
        closeModal()
        selectProd(prod)
    }
    useEffect(() => {
       
        peticionesGet()
    }, [])

    return (
        <div className="App-containers">
            <Navbar />
            
            <div className="productos_container">
                    <div className="oferta">
                        <span className="tituloCabezera">
                            Ofertas
                        </span>

                        <div className="productos_pintar">
                        {
                            productos.filter(producto=>producto.Tipo==="Fruta").map(item=>(
                                <Card 
                                handleOnClick={selectProd}
                                key={item.titulo}
                                productos={productos}
                                card={item}
                                />
                            ))
                        }

                        </div>
                    </div>
                    <div className="populares">
                    <span className="tituloCabezera">
                    Mas Populares
                </span>
                <div className="productos_pintar">
                    {
                        productos.filter(producto=>producto.Tipo==="Viveres").map(item=>(
                            <Card 
                            handleOnClick={selectProd}
                            key={item.titulo}
                            productos={productos}
                            card={item}
                            />
                        ))
                    }

                </div>

            </div>
                
            
             
            </div>
           
            <ModalProducto 
            onClick={selectRelationProd}
            producto={producto}
            isOpenModal={isOpenModal}
            closeModal={closeModal}
            productos={productos}
            />
        </div>
    )
}
