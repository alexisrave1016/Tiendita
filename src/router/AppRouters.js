import {
    HashRouter as Router,
    Switch
} from "react-router-dom";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import { App } from "../containers/App";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { loginEmailPassword } from "../actions/actionLogin";
import { useEffect } from "react";

const AppRouters = () => {
    const [checking, setChecking] = useState(true)//valida q la sesion este activa
    const [isLoggedIn, setIsLoggedIn] = useState(false) //
    const dispatch = useDispatch()


    useEffect(() => {
        const auth= getAuth();
        onAuthStateChanged(auth, (user)=> {
            if(user?.uid){  
                 dispatch(loginEmailPassword(user.uid, user.displayName));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn])
    if(checking){
        return(
            <div className="swal2-loading">
                <h1>Espere ...</h1>
            <img src="loading.png" alt="no disponible" />
            </div>
            
            // <h1>Espere por Favor</h1>
        )
    }
    return (
            <Router>
                <Switch>
                    <PublicRouter 
                    exact
                    path="/portada" 
                    component={App} 
                    isAuthenticated={isLoggedIn}
                    />
                    

                    <PublicRouter 
                    exact
                    path="/login"   
                    component={Login} 
                    isAuthenticated={isLoggedIn}
                    />

                    <PublicRouter
                    exact
                    path="/registro"   
                    component={Registro} 
                    isAuthenticated={isLoggedIn}
                    />

                    <PrivateRouter 
                    path="/" 
                    component={DashboardRouter}
                    isAuthenticated={isLoggedIn}
                    />
                    
                </Switch>
            </Router>
    )
}

export default AppRouters