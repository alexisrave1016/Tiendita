import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'


const url='https://api-alexisrave-anime.herokuapp.com/tienda?Tipo=Fruta'
export const ProdutoRelacionadoFrutas = () => {
    const [frutas, setFrutas] = useState([])
    const peticionesGet= async()=>{
        await axios.get(url)
        .then(resp=>{
            setFrutas(resp.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {
       peticionesGet()
    }, [])

    return (
        <div>
             <div className="productos_pintar">
                {
                    frutas.map(item=>(
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
