import React from 'react';
import { Link } from 'react-router-dom';

import doctor1 from '../../assets/img/hospital/doctor1.jpg';
import doctor2 from '../../assets/img/hospital/doctor2.jpg';

const Welcome = () => (
    <section className="welcome-section">
        <div>
            <img src={doctor1} alt="Doctor 1" />
            <img src={doctor2} alt="Doctor 2" />
        </div>
        <div>
            <h5><span className="underline">Wel</span>come to Angels of God Medical Center</h5>
            <h4>Best Care for Your<br /> Good Health</h4>
            <p>The value of health can never be over emphasized, it is a  priceless asset that should be zealously protected.</p>
            <ul>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Antenal and post natal care.</li>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Pharmaceutical services.</li>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Intensive care and surgical unit.</li>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Laboratory and radiology services.</li>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Optic and dental services.</li>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Emergency and rehabilitative services.</li>
            </ul>
            <Link to="/about">Learn More</Link>
        </div>
    </section>
);

export default Welcome