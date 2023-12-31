import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './Reducers'

const rootReducer = combineReducers({userReducer});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;