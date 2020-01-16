import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from './Banner';
import Advert from './Advert';
import Requirements from './Requirements';
import Contact from './Contact';

const Home = (props) => {
    return (
        <>
            <>
                <Helmet><title>Admissions | Angels of God Medical Center and Allied Services</title></Helmet>
            </>
            <Banner />
            <Advert />
            <Requirements />
            <Contact />
        </>
    );
};

export default Home;