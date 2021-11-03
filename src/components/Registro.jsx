import React from 'react'
import { Form, Button} from 'react-bootstrap';
import { LinkRuta } from './Disenos';

export const Registro = () => {
    return (
        <div className="registro"> 
        <Form className="container_registro">
             <LinkRuta to="/"><img className="login_logo" src="Tiendita.png" alt="no disponible" srcset="" /></LinkRuta>
            <div className="registro_contianer">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <h5 className="titulos">Tu nombre</h5>
                    <Form.Control 
                        className="registro_casillas"
                        type="text"
                        name="nombre"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h5 className="titulos">Correo electronico</h5>
                    <Form.Control 
                        className="registro_casillas"
                        type="email"
                        name="email"
                   />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h5 className="titulos">Contraseña</h5>
                    <Form.Control 
                        className="registro_casillas"
                        type="password"
                        placeholder="Como minimo 6 caracteres"
                        name="pass1"
                  />
                    <span className="informacion_contrasñea"> 𝒾    La contraseña debe contener al menos seis caracteres.</span>
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <h5 className="titulos">Vuelva a escribir la contraseña</h5>
                    <Form.Control 
                        className="registro_casillas"
                        type="password"
                        placeholder="Password"
                        name="pass2"
                    />
                </Form.Group>
                

                <Button variant="primary" type="submit" className="registrar_nuevo">
                    Crea tu cuenta en Tienda
                </Button>

                <span className="inf_adicional">Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de tienda.com</span>
                <hr className="linea1"/>
                <br />
                <span className="inf_adicional">¿Ya tienes una cuenta? Iniciar sesión
                                                ¿Compras para el trabajo? Crea una cuenta corporativa gratis</span>
            
            </div>
        </Form>

    </div>
    )
}
