import React from 'react';
import { Link } from 'react-router-dom';

const Departments = () => (
    <section className="departments">
        <h4 className="header"><span className="underline">Dep</span>artments</h4>
        <p className="header-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, vel fugit debitis provident corrupti autem. Ut quidem amet vero nam.</p>
        <section>
            <div className="department">
                <div></div>
                <h6>OBSTETRICS AND GYNECOLOGY</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>INTERNAL MEDICINE</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>SURGERY</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>PAEDIATRICS</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>PREVENTIVE MEDICINE</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>LABORATORY AND RADIOLOGY</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>MEDICAL PSYCHOLOGY</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.</p>
                <Link to="/">Learn More</Link>
            </div>
            <div className="department">
                <div></div>
                <h6>GERIATRICS</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium.</p>
                <Link to="/">Learn More</Link>
            </div>
        </section>
    </section>
);

export default Departments;