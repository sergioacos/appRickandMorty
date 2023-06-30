import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import * as React from 'react';
import{BrowserRouter, Routes, Route} from '../node_modules/react-router-dom/dist/index';
import Home from './global/components/home/index';
import Detail from './app/screens/detail/index';
import NotFound from './global/screen/notFound/index';
import Layout from './global/components/Layout/index';

function App() {
 

  return (
    <BrowserRouter>
    <Routes >
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element= {<Detail/>}/>
      <Route path="*"element={<NotFound/>}/>
      </Route>
    </Routes>

    </BrowserRouter>
    /*<>
      <body>
        <main>
          <Home></Home>
        </main>
      </body>
    </>*/
    
  )
}

export default App
