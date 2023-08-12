
import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

const main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default main;