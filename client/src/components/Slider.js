import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import slide1 from '../assets/img/slide1.jpg';
import slide2 from '../assets/img/slide2.jpg';
import slide3 from '../assets/img/slide3.jpg';
import slide4 from '../assets/img/slide4.jpg';
import slide5 from '../assets/img/slide5.jpg';
import slide6 from '../assets/img/slide6.jpg';
import slide7 from '../assets/img/slide7.jpg';

const Slider = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.slider');
        //eslint-disable-next-line
        const instances = M.Slider.init(elems, { height: 500 });
    }, []);

    return (
        <div className="slider">
            <ul className="slides">
                <li>
                    <img src={slide1} alt="Slide 1" />
                    <div className="first-slide caption center-align">
                        <h3 className="slide1-caption">Welcome to Angels of God Medical Center <br />and Allied Services</h3>
                        <Link to="/about">Read More</Link>
                    </div>
                </li>
                <li>
                    <img src={slide2} alt="Slide 2" />
                    <div className="caption left-align">
                        <h4 className="slide2-caption">Culturally Diverse Multiracial Community</h4>
                    </div>
                </li>
                <li>
                    <img src={slide3} alt="Slide 3" />
                    <div className="caption left-align">
                        <h3 className="slide3-caption">We provide World class surgical services</h3>
                    </div>
                </li>
                <li>
                    <img src={slide4} alt="Slide 4" />
                    <div className="caption center-align">
                        <h3 className="slide4-caption">Globally recognized high educational standard</h3>
                        <Link to="/admissions/apply">Apply for Admission</Link>
                    </div>
                </li>
                <li>
                    <img src={slide5} alt="Slide 5" />
                    <div className="caption center-align">
                       <h3 className="slide5-caption">Exceptional Medical Practitioners</h3>
                    </div>
                </li>
                <li>
                    <img src={slide6} alt="Slide 6" />
                    <div className="caption center-align">
                        <h3 className="slide6-caption">Comfortable living environments with easy accessibility</h3>
                    </div>
                </li>
                <li>
                    <img src={slide7} alt="Slide 7" />
                    <div className="caption center-align">
                        <h4 className="slide7-caption">Conducive environments that facilitate an optimum learning experience</h4>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default Slider;