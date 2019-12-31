import React from 'react';
import { Link } from 'react-router-dom';

const Departments = () => (
    <section className="departments">
        <h4 className="header"><span className="underline">Dep</span>artments</h4>
        <p className="header-text">Our hospital is multisectorial, consisting of various well-equipped departments to facilate optimum quality of care.</p>
        <section>
            <div className="department">
                <div></div>
                <h6>OBSTETRICS AND GYNECOLOGY</h6>
                <p>We provide exceptional care from pregnancy through childbirth, and postpartum periods.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>INTERNAL MEDICINE</h6>
                <p>Our highly skilled general medical practitioners provide unique services.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>SURGERY</h6>
                <p>Our surgeons deliver first class services for a wide spectrum of procedures.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>PAEDIATRICS</h6>
                <p>We zealously provide the ideal health care for children.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>PREVENTIVE MEDICINE</h6>
                <p>Prevention is always better cure, that's why we provide prophylactic care.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>LABORATORY AND RADIOLOGY</h6>
                <p>Our labs are well furnished with sophisticated machines for diverse procedures.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>MEDICAL PSYCHOLOGY</h6>
                <p>Excellent mental health care services are made available to our patients.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>GERIATRICS</h6>
                <p>We provide diagnostic, treatment, preventive, and rehabilitative care for the elderly.</p>
                <Link to="/">Learn More</Link>
            </div>
        </section>
    </section>
);

export default Departments;