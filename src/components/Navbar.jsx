import React from 'react'
import { Button } from './Disenos'



export const Navbar = () => {
    return (
        <div className="Navbar_container">
            <div className="navbar_superior">
                <div className="titulo">
                    <h4>Tiendita</h4>
                </div>
                <div className="ubicacion_carrito">
                    <div className="ubicacion">
                        <img className="img_logo" src="placeholder.png" alt="no disponible" srcset="" />
                      <h5> México City Marriott Reforma Hotel...</h5>
                      
                    </div>
                    <div className="carrito">
                        <div className="carrito_logo">
                            <img className="img_logo" src="carrito-de-compras.png" alt="no disponible" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Navbar_inferior">
                <img className="banner" src="Banner.png" alt="" srcset="" />
            </div>

            
        </div>
    )
}
