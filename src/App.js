import React from 'react'
import Header from './Container.js/Header'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Productlisting from './Container.js/Productlisting'
import ProductDetail from './Container.js/ProductDetail'
import Nopage from './Container.js/nopage'
function App() {
  return (
    <>
   <Header/>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Productlisting/>}/>
   <Route path='/Product/:id' element={<ProductDetail/>}/>
   <Route path='*' element={<Nopage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App