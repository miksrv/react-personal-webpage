import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './store/reducers'

import 'semantic-ui-css/semantic.min.css'
import './static/css/main.sass'

import Header from './layouts/Header'
import Main from './pages/Main'
import Blog from './pages/Blog'
import Error404 from './pages/Error404'

import 'moment/locale/ru'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/blog" component={Blog} />
            <Route path="/404" component={Error404} />
            <Redirect to="/404" />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);