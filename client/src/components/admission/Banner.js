import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <section className="admission-banner">
                <div className="banner-overlay">
                    <section>
                        <h2>Hello Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquam ipsam at quis temporibus obcaecati ab similique repellat vitae sapiente?</p>
                        <Link to="">Get Started</Link>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Banner;