import React from 'react';
import { useEffect } from 'react';

import{useDispatch,useSelector}  from 'react-redux';

import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { getProducts as listProducts } from '../../redux/actions/productActions';

import {styled,Box} from "@mui/material";



const Component =styled(Box)`
padding:10px;
background:#f2f2f2
`
function Home() {

 const getProducts= useSelector(state=>state.getProducts)
 const {products}=getProducts;
 

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

  return (
    <>
    <NavBar />
    <Component>
    <Banner /> 
    <MidSlide  products={products} title="Deal of the Day" timer={true}/>
    <Slide  products={products} title="Discounts for You" timer={false}/>
    <MidSection />

    <Slide  products={products} title="Suggesting Items"timer={false}/>
    <Slide  products={products} title="Top Selection"timer={false}/>
    <Slide  products={products} title="Recommended Items"timer={false}/>
    <Slide  products={products} title="Trending Offers"timer={false}/>
    <Slide  products={products} title="Seasons Top Picks"timer={false}/>
    <Slide  products={products} title="Top Deals on accessories"timer={false}/>
    </Component>
      
    </>
    
  )
}

export default Home;