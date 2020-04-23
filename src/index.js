import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './store/reducers'

import 'semantic-ui-css/semantic.min.css'
import './static/css/main.sass'

import Header from './layouts/Header'
import Main from './pages/Main'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Error404 from './pages/Error404'

import 'moment/locale/ru'


const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);