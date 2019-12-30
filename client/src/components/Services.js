import React from 'react';

import OverseaStudies from '../assets/img/overseas.jpg';
import MedicalTrip from '../assets/img/medical-trip.jpg';
import GeneralMerchandise from '../assets/img/merchandise.jpg';
import ImportExport from '../assets/img/import-export.jpg';
import EstateDevelopment from '../assets/img/estate-development.jpg';
import OilAndGas from '../assets/img/oil-and-gas.jpg';

const Services = () => {
    return (
        <section className="services-section">
            <h4 className="services-header">Our Offe<span className="underline">red Ser</span>vices</h4>
            <p className="services-text">Our services include but are not limited to the following</p>
            <div className="services">
                <div className="service">
                    <img src={OverseaStudies} className="responsive-img" alt="Admission & Visa for Oversea Studies" />
                    <h5>Admissions &amp; Visa for Oversea Studies</h5>
                    <p>An opportunity to achieve your vision, by studying your dream course anywhere overseas.</p>
                </div>
                <div className="service">
                    <img src={MedicalTrip} alt="Oversea Medical Trips" />
                    <h5>Oversea Medical Trips</h5>
                    <p>Health is wealth, so entrust your health with us and stay wealthy.</p>
                </div>
                <div className="service">
                    <img src={GeneralMerchandise} className="responsive-img" alt="General Merchandise" />
                    <h5>General Merchandise</h5>
                    <p>We are committed to serve the needs of our customers, in order to facilitate continuous growth in business worldwide.</p>
                </div>
                <div className="service">
                    <img src={ImportExport} className="responsive-img" alt="Import & Export" />
                    <h5>Import &amp; Export</h5>
                    <p>Your go to support system for developing import and export capacity.</p>
                </div>
                <div className="service">
                    <img src={EstateDevelopment} className="responsive-img" alt="Estate Development" />
                    <h5>Estate Development</h5>
                    <p>We provide landscapes and structures embedded with aesthetic integrity that goes beyond your imagination.</p>
                </div>
                <div className="service">
                    <img src={OilAndGas} className="responsive-img" alt="Oil and Gas Services" />
                    <h5>Oil &amp; Gas Services</h5>
                    <p>We are well equipped to facilitate your oil and gas operations within and beyond the country.</p>
                </div>
            </div>
        </section>
    );
}

export default Services