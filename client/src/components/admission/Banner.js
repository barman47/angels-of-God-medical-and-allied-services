import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <section className="admission-banner">
                <div className="banner-overlay">
                    <section>
                        <h2>Study your dream Course Abroad</h2>
                        <p>Avail yourself of the opportunity to study at anyone our first class universities recognized globally for their ultimate services.</p>
                        <Link to="/admissions/apply">Get Started</Link>
                        <Link to="/admissions/login">Process Application</Link>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Banner;