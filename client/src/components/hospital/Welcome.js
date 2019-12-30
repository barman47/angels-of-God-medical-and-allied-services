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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita iste suscipit consectetur dignissimos aut nesciunt, cum reiciendis sed recusandae ullam maxime quis minus earum.</p>
            <ul>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Lorem ipsum dolor sit.</li>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Lorem ipsum dolor sit.</li>
                <li><span className="mdi mdi-check-circle-outline welcome-list-icon"></span>Lorem ipsum dolor sit.</li>
            </ul>
            <Link to="">Learn More</Link>
        </div>
    </section>
);

export default Welcome