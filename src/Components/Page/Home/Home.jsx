import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Faq from '../Faq/Faq';
import Hero from './Hero';
import Process from './Process';
import Team from './Team';

const Home = () => {
    const courseData = useLoaderData()
    return (
      <div>
        <Hero></Hero>
        <Process></Process>
        <Team courseData={courseData}></Team>
        <Faq></Faq>
      </div>
    );
};

export default Home;