import axios from 'axios'
import React from 'react'
import { useState, useEffect} from 'react'
import Card from '../components/Card'
import { Button, LinkRuta } from '../components/Disenos'
import { Navbar } from '../components/Navbar'





const url='https://api-alexisrave-anime.herokuapp.com/tienda'

export const App = () => {
    
    const [productos, setProductos] = useState([])
    const peticionesGet= async()=>{
        await axios.get(url)
        .then(resp=>{
            setProductos(resp.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {
       peticionesGet()
    }, [])



 


    return (
        <div className="App-containers">
            <Navbar/>
            
            <div className="productos_container">

            
            <span>
                Ofertas
            </span>

            <div className="productos_pintar">
                {
                    productos.map(item=>(
                        <Card 
                        key={item.titulo}
                        productos={productos}
                        card={item}
                        />
                    ))
                }

            </div>
             
        </div>
        <Button>Agragar Producto</Button>    
        </div>
    )
}
