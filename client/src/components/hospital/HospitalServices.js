import React from 'react';

const Services = () => (
<section>
        <h3 className="health-services-title">Awesome Health Services</h3>
        <div className="hospital-services">
            <div className="service">
                <span className="mdi mdi-hospital-box service-icon"></span>
                <h5>Hospitality</h5>
                <p>Our environment and personnel provide and aura for healing and comfort.</p>
            </div>
            <div className="service">
                <span className="mdi mdi-heart-pulse service-icon"></span>
                <h5>Expert Consultation</h5>
                <p>We provide top-notch medical practioners to attend to your needs.</p>
            </div>
            <div className="service">
                <span className="mdi mdi-rocket service-icon"></span>
                <h5>24/7 Emergency Services</h5>
                <p>Time is always of the essence, so we waste none in providing care.</p>
            </div>
            <div className="service">
                <span className="mdi mdi-account-group service-icon"></span>
                <h5>Family Planning</h5>
                <p>The reproductive health of our client is of paramount importance to us.</p>
            </div>
            <div className="service">
                <span className="mdi mdi-bug-outline service-icon"></span>
                <h5>Intensive Care</h5>
                <p>The necessary facilities and  well trained Healthcare providers to handle delicate cases are provided. </p>
            </div>
            <div className="service">
                <span className="mdi mdi-headset service-icon"></span>
                <h5>Online Appointment</h5>
                <p>Schedule an appointment with us from your comfort zone. Anytime, any day.</p>
            </div>
        </div>
    </section>
);

export default Services;