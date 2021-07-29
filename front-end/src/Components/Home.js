import React from 'react';
import './Home.css'
import CardContainer from './CardContainer'

const Home = () => {
    return (
        <>
            <div className="home-container">
                <h1>Lua Script Showcase</h1>
            </div>
            <CardContainer />
        </>
    );
}

export default Home;