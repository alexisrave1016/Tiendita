import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import { App } from "../containers/App";

const AppRouters = () => {

    return (
            <Router>
                <Switch>
                    <Route exact path="/"   component={App} />
                    <Route exact path="/login"   component={Login} />
                    <Route exact path="/registro"   component={Registro} />
                </Switch>
            </Router>
    )
}

export default AppRouters