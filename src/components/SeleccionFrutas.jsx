import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Navbar } from './Navbar'



const url='https://api-alexisrave-anime.herokuapp.com/tienda'



const SeleccionFrutas = () => {
    const [viveres, setViveres] = useState([])
    const peticionesGet= async()=>{
        await axios.get(url)
        .then(resp=>{

            setViveres(resp.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {
       
        peticionesGet()
    }, [])
    return (
        
        <div className="containerViveresFrutas">
            <Navbar/>
            <div className="pintar_viveresYfrutasSel">
                    {
                        viveres.filter(producto=>producto.Tipo==="Fruta").map(item=>(
                            <Card 
                            key={item.titulo}
                            card={item}
                            />
                        ))
                    }
            </div>
         
         
        </div>
    )
}

export default SeleccionFrutas
