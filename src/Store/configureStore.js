import { createStore, combineReducers, compose } from 'redux'
import placesReducer from './Reducers/Places'

const rootReducer = combineReducers({
    places:placesReducer
});

const composeEnhancers = () => {
    
}

const configureStore = ()=>{
    return createStore(rootReducer);
}


export default configureStore