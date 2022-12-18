import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals'

import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
import MainPage from 'pages/main/MainPage'
import ErrorPage from 'pages/error/ErrorPage'

import 'styles/index.sass'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <div className='wrapper'>
              <Header/>
              <div className='container'>
                  <Routes>
                      <Route index element={<MainPage/>} />
                      <Route path='*' element={<ErrorPage/>} />
                  </Routes>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
