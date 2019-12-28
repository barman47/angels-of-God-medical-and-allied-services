import React from 'react';

import OverseaStudies from '../assets/img/overseas.jpg';
import MedicalTrip from '../assets/img/medical-trip.jpg';
import GeneralMerchandise from '../assets/img/merchandise.jpg';
import ImportExport from '../assets/img/import-export.jpg';
import EstateDevelopment from '../assets/img/estate-development.jpg';
import OilAndGas from '../assets/img/oil-and-gas.jpg';

const Services = (props) => {
    return (
        <section className="services-section">
            <h4 className="services-header">Our Offe<span className="underline">red Ser</span>vices</h4>
            <p className="services-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, amet provident! Corporis sint excepturi temporibus labore repellendus impedit.</p>
            <div className="services">
                <div className="service">
                    <img src={OverseaStudies} alt="Admission & Visa for Oversea Studies" />
                    <h5>Admissions &amp; Visa for Oversea Studies</h5>
                    <p>An opportunity to achieve your vision, by studying your dream course anywhere overseas.</p>
                </div>
                <div className="service">
                    <img src={MedicalTrip} alt="Oversea Medical Trips" />
                    <h5>Oversea Medical Trips</h5>
                    <p>Health is wealth, so your health with us and stay wealthy.</p>
                </div>
                <div className="service">
                    <img src={GeneralMerchandise} alt="General Merchandise" />
                    <h5>General Merchandise</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, omnis?</p>
                </div>
                <div className="service">
                    <img src={ImportExport} alt="Import & Export" />
                    <h5>Import &amp; Export</h5>
                    <p>Your go to support system for developing import and export capacity.</p>
                </div>
                <div className="service">
                    <img src={EstateDevelopment} alt="Estate Development" />
                    <h5>Estate Development</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, omnis?</p>
                </div>
                <div className="service">
                    <img src={OilAndGas} alt="Oil and Gas Services" />
                    <h5>Oil &amp; Gas Services</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, omnis?</p>
                </div>
            </div>
        </section>
    );
}

export default Services