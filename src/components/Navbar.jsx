import React from 'react'
import {loca} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    return (
        <div className="Navbar_container">
            <div className="navbar_superior">
                <div className="titulo">
                    <h4>Tiendita</h4>
                </div>
                <div className="ubicacion_carrito">
                    <div className="ubicacion">
                        <img src="placeholder.png" alt="no disponible" srcset="" />
                      <h5>Ubicacion actual</h5>
                      
                    </div>
                    <div className="carrito">
                        <div className="carrito_logo">
                            <img src="carrito-de-compras.png" alt="no disponible" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Navbar_inferior">
                <img src="Banner.png" alt="" srcset="" />
            </div>

            
        </div>
    )
}
