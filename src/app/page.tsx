import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HomePage from './home/page'

const App = () => {
    return (
        <div className="flex">
            <Navbar />
            <HomePage />
        </div>


    );
};

export default App;
