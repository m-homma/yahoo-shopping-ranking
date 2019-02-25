import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
//import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import createStore from './createStore';
import * as serviceWorker from './serviceWorker';

// historyのインスタンスを生成
const history = createBrowserHistory();

// Storeの生成
const store = createStore(history);

ReactDOM.render(
    // storeをAppコンポーネントに紐付け
    <Provider store={store}>
        {/*
            Linkコンポーネントなどが動作するように
            react-router-domのRouterではなく
            react-router-reduxのConnectedRouterを使う
        */}
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
