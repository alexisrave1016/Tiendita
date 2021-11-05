import React from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'

import { Productos } from '../components/Productos'

export const DashboardRouter = () => {
    return (
        <div>
           
            <Switch>
                <Route exact path="/productos"  component={Productos}/>
                <Redirect to="/productos"/>
            </Switch>
            
        </div>
    )
}
