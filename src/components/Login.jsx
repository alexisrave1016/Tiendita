import React from 'react'
import { LinkRuta } from './Disenos'

const Login = () => {
    return (
            <div className="container-login">
                <div className="login_logo">
                   <LinkRuta to="/"><img src="Tiendita.png" alt="" srcset="" /></LinkRuta> 
                </div>
               <div className="login">
                    <div className="login_container">
                        <h1>Iniciar sesión</h1>
                        <form >
                        <h5>Email</h5>
                        <input className="texto" 
                        type="email" 
                        name="email" 
                        />

                        <h5>Password</h5>
                        <input className="texto" 
                        type="password" 
                        name="password"
                        />

                        <button type="submit" variant="primary" className="login_button" >Continuar</button>
                        </form>
                        <button className="login_google"> <img className="logo_google" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632601095/sprint3/google-logo_cqfi6y.png" alt="" srcset="" /> Sign In Google </button>
                        <button className="login_facebook" ><img className="logo_face" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1633317615/social-facebook-button-blue-icon_cqwfbz.png" alt="no disponible" srcset="" />Sign In Facebook</button>
                        <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Tiendita.</p>

                    </div>
        
                        <hr className="linea"/> <span className="title_nuevo_amazon">¿Eres nuevo en Tiendita?</span>
        
                        <LinkRuta to="/registro"><button className="login_registro">Crea tu cuenta de Tiedita</button></LinkRuta>
                </div>
            </div>    
       
           

    )
}

export default Login
