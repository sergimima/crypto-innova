import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/login.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { News } from './components/News'
import { Projects } from './components/Projects'
import {Login} from './components/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
            <BrowserRouter >
              <Routes>
                <Route path='/' element={<Home></Home>}>
                  <Route path='/news' element={<News></News>}/>
                  <Route path='/projects' element={<Projects></Projects>}></Route>
                  <Route path='/login' element={<Login></Login>}></Route>
                </Route>
              </Routes>
            </BrowserRouter >
        </React.StrictMode>,
)
