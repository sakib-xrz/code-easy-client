import React from 'react';
import Faq from '../Faq/Faq';
import Hero from './Hero';
import Process from './Process';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Process></Process>
            <Faq></Faq>
        </div>
    );
};

export default Home;