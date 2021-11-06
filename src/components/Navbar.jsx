import React from 'react'
import { LinkRuta } from './Disenos'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from '@firebase/auth'




export const Navbar = () => {
    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [open, setOpen] = useState(false)

    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

        });
    }, [setIsLoggedIn])


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
                    <LinkRuta to="/login" hidden={isLoggedIn ?true:false}>
                    <div className="perfil_login">
                        <img  className="img_logo" src="perfil.png" alt="no disponible" srcset="" />
                        <h5>Registro / Ingresa</h5>
                    </div>
                    </LinkRuta>
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
