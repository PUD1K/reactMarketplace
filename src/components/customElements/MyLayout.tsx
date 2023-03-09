import React from 'react';
import { Outlet } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import MyCanvas from './MyCanvas';
import { useAppSelector } from '../../hooks/redux';

const MyLayout = () => {
    const {showCanvas} = useAppSelector(state => state.componentsReducer)

    return (
        <>
            <MyNavbar/>
            <MyCanvas
            show={showCanvas}/>

            <main className='container' style={{marginLeft: '9%', maxWidth: '1500px'}}>
                <Outlet/>
            </main>

            <div className='static-bottom mt-auto'>
                <MyFooter/>
            </div>
        </>
    );
};

export default MyLayout;