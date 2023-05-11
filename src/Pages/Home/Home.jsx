import React from 'react';
import Banner from '../../Component/Banner/Banner';
import AllProducts from '../../Component/AllProducts/AllProducts/AllProducts';
import OfferProducts from '../../Component/OfferProducts/OfferProducts';
import JustInSection from '../../Component/AllProducts/JustInSection/JustInSection';
import TopOfTheWeek from '../../Component/AllProducts/TopOfTheWeek/TopOfTheWeek';
import Gifting from '../../Component/AllProducts/Gifting/Gifting';
import SuperSaves from '../../Component/AllProducts/SuperSaves/SuperSaves';
import Streaming from '../../Component/Streaming/Streaming/Streaming';
import ThisOrThat from '../../Component/ThisOrThat/ThisOrThat';
import SkinCareBasic from '../../Component/AllProducts/SkinCareBasic/SkinCareBasic';
import ExploreProducts from '../../Component/ExploreProducts/ExploreProducts';
import Blog from '../../Component/Blog/Blog';


const Home = () => {
    return (
        <div className='container mx-auto'>
         
           <Banner></Banner>
            <AllProducts></AllProducts>
            <OfferProducts></OfferProducts>
            <JustInSection></JustInSection>
            <TopOfTheWeek></TopOfTheWeek>
            <Gifting></Gifting>
            <SuperSaves></SuperSaves>
            <Streaming></Streaming>
            <ThisOrThat></ThisOrThat>
            <SkinCareBasic></SkinCareBasic>
            <ExploreProducts></ExploreProducts>
            <Blog></Blog>

          
            
        </div>
    );
};

export default Home;