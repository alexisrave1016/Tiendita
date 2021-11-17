import React from 'react'
import Buscador from './Buscador'
import { LinkRuta} from './Disenos'

export const Navbar = ({selec, productosFrutas}) => {
   
    return (
        <div className="Navbar_container">
            <div className="navbar_superior">
                <div className="titulo">
                    <LinkRuta to="/portada"><h4>Tiendita</h4></LinkRuta>
                </div>
                <div className="ubicacion_carrito">
                    <Buscador />
                    
                    <div className="perfil_login">
                        <LinkRuta to="/frutas" ><h5 className="SelecionTipo">Frutas</h5> </LinkRuta> 
                        <LinkRuta to="/viveres"><h5 className="SelecionTipo">Viveres</h5> </LinkRuta>      
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
