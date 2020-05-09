import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/root-reducer';
export const history = createBrowserHistory();
const myRouterMiddleware = routerMiddleware(history);
const initialState = {};
const middleWare = [myRouterMiddleware, thunk];
export const store = createStore(
    rootReducer(history),
    initialState,
    process.env.NODE_ENV === 'development' ?
        composeWithDevTools(applyMiddleware(...middleWare)) :
        applyMiddleware(...middleWare)
);