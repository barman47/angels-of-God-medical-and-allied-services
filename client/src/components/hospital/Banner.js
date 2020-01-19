import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => (
    <section className="banner">
        <div>
            <h2>Your health, Our priority. <br />Every moment</h2>
            <p>Health is a fundamental human right, so we ensure that<br /> you enjoy the highest attainable standard of care.</p>
            <Link to="/patients/booking">Make an Appointment</Link>
        </div>
    </section>
);

export default Banner;