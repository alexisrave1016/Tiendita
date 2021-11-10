import React from 'react'
import { LinkRuta} from './Disenos'

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
                    
                    <div className="perfil_login">
                           <h5>Frutas</h5> 
                           <h5>Viveres</h5>      
                    </div>

                    <LinkRuta to="/login" >
                    <div className="perfil_login">
                        <img  className="img_logo" src="perfil.png" alt="no disponible" srcset="" />
                        <h5>Registro / Ingresa</h5>
                    </div>
                    </LinkRuta>
                   


                    <LinkRuta to="/carrito"><div className="carrito">
                        <div className="carrito_logo">
                            <img className="img_logo" src="carrito-de-compras.png" alt="no disponible" srcset="" />
                        </div>
                    </div>
                    </LinkRuta>
                </div>
            </div>
            <div className="Navbar_inferior">
                <img className="banner" src="Banner.png" alt="" srcset="" />
            </div>

            
        </div>
    )
}
