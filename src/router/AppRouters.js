import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import { App } from "../containers/App";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const AppRouters = () => {
    return (
            <Router>
                <Switch>
                    <PublicRouter 
                    exact
                    path="/portada" 
                    component={App} />

                    <PublicRouter 
                    exact
                    path="/login"   
                    component={Login} />

                    <PublicRouter
                    exact
                    path="/registro"   
                    component={Registro} />

                    <PrivateRouter 
                    path="/" 
                    component={DashboardRouter}/>
                    
                </Switch>
            </Router>
    )
}

export default AppRouters