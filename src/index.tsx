import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals'

import Header from './layouts/header'
import Footer from './layouts/footer'
import Main from './features/main'
import Error from './features/error'

import './styles/index.sass'

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
                      <Route index element={<Main/>} />
                      <Route path='*' element={<Error/>} />
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
