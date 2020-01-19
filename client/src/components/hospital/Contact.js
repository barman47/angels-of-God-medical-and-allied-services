import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className="hospital-contact">
            <div className="contact-hospital">
                <div>
                    <div className="contact-info">
                        <h5>For Any Emergency</h5>
                        <p>Contact us anytime, any day.</p>
                    </div>
                    <a className="call-contact" href="tel:+234-7033501199"><span className="mdi mdi-phone phone-icon"></span>(+234) 07033501199</a>
                </div>
            </div>
            <div className="contact-hospital">
                <div>
                    <div className="contact-info">
                        <h5>Make an Online Appointment</h5>
                        <p>Schedule an appointment from your comfort zone</p>
                    </div>
                    <Link className="booking" to="/patients/booking">Make An Appointment</Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;