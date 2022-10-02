import React from 'react';

// components
import Header from './Header';
import AboutUs from './AboutUs';
import Services from './Services';
import WorkSamples from './WorkSamples';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <AboutUs/>
            <Services/> 
            <WorkSamples/>
        </>
    );
};

export default LandingPage;