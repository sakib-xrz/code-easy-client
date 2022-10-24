import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Common/Footer';
import Header from '../Components/Common/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;