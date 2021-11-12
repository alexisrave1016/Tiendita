import React from 'react'
import Card from '../components/Card'




export const ProdutoRelacionadoFrutas = (props) => {
  const{
      productosTipo,productos,handleOnClick
  }=props
  
    return (
        <div>
             <div className="productos_pintar_frutas">
                 <div className="scroolProductosRelacionados">
                {
                    productosTipo.map(item=>(
                        <Card 
                        key={item.titulo}
                        productos={productos}
                        card={item}
                        handleOnClick={handleOnClick}
                        />
                    ))
                }
                </div>

            </div>
        </div>
    )
}
