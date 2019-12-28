import React from 'react';
import Slider from './Slider';
import Services from './Services';
import Parallax from './HomePageParallax';
import Contact from './Contact';

const Home = () => {
    return (
        <main>
            <Slider />
            <Services />
            <Parallax />
            <Contact />
        </main>
    );
}

export default Home;