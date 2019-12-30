import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from './Banner';
import HospitalServices from './HospitalServices';
import Welcome from './Welcome';
import Departments from './Departments';

const Home = () => (
    <>
        <Helmet><title>Angels of God Medical Center | Home - Angels of God Medical Center and Allied Services</title></Helmet>
        <Banner />
        <Welcome />
        <HospitalServices />
        <Departments />
    </>
);

export default Home;