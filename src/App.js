import React from 'react';

import DataProvider from './context/DataProvider';

import Header from './components/Header/Header';
import Home from './components/home/Home';
import DeatailViews from './components/Detail/DeatailViews';
import {Box} from "@mui/material";
import Cart from './components/cart/Cart'


import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
   <DataProvider>
    <BrowserRouter>
    <Header />
   <Box style={{marginTop:54}}>
    <Routes>
     <Route path='/'element ={<Home />} />
     <Route path='/product/:id'element={<DeatailViews />}/>
     <Route path= '/cart' element={<Cart />} />
    </Routes>
   
   </Box>

    </BrowserRouter>
   
   
   </DataProvider>
  );
}

export default App;
