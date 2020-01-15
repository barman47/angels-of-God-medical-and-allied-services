import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from './Banner';

const Home = (props) => {
    return (
        <>
            <>
                <Helmet><title>Admissions | Angels of God Medical Center and Allied Services</title></Helmet>
            </>
            <Banner />
        </>
    );
};

export default Home;