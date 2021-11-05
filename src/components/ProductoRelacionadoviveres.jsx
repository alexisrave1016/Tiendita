import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'


const url='https://api-alexisrave-anime.herokuapp.com/tienda?Tipo=Viveres'
export const ProductoRelacionadoviveres = () => {
    const [viveres, setviveres] = useState([])
    const peticionesGet= async()=>{
        await axios.get(url)
        .then(resp=>{
            setviveres(resp.data)
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
                    viveres.map(item=>(
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
