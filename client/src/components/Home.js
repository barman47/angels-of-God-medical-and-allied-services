import React from 'react';
import { Helmet } from 'react-helmet';

import Slider from './Slider';
import Services from './Services';
import Parallax from './HomePageParallax';
import Contact from './Contact';

const Home = () => (
    <>
        <Helmet><title>Home - Angels of God Medical Center and Allied Services</title></Helmet>
        <main>
            <Slider />
            <Services />
            <Parallax />
            <Contact />
        </main>
    </>
);

export default Home;