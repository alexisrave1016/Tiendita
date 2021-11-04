import { createStore, combineReducers, compose,applyMiddleware} from "redux";
import {loginReducers} from '../reducers/loginReducers'
import { registerReducers } from "../reducers/registerReducers";
import thunk from "redux-thunk";


// esto combila los milwer
const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers= combineReducers({
    login: loginReducers,
    register: registerReducers

})

export const store = createStore(
    reducers,
    // applyMiddleware esto resive como parametro a trunk que instalamos
    composeEnhancers(applyMiddleware(thunk))
    
)