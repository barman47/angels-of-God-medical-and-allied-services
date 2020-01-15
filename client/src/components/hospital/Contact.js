import React from 'react';

const Contact = () => (
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
                <button>Make An Appointment</button>
            </div>
        </div>
    </section>
);

export default Contact;