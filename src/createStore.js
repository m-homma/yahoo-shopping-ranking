import {
    // 名前が被ってしまうので別名でimportする
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
//import { routerReducer, routerMiddleware } from 'react-router-redux';

import * as reducers from './reducers';

// historyはsrc/index.jsから渡すようにする
export default function createStore(history) {
    return reduxCreateStore(
        // 1つのReducerで完結することはほぼ無いので、最初からcombineReducerを使う実装にしておく
        combineReducers({
            ...reducers,
            // react-router-reduxのReducer
            router: connectRouter(history)
        }),
        applyMiddleware(
            // redux-loggerのRedux Middleware
            logger,
            // react-router-reduxのRedux Middleware
            routerMiddleware(history)
        )
    );
}