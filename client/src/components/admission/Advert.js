import React from 'react';

const Advert = () => {
    return (
        <div className="admission-advert">
            <div className="admission-advert-container">
                <span className="mdi mdi-certificate"></span>
                <div>
                    <h6>Globally Recognized Certificate</h6>
                    <p>Certicates from our universities are universally  recognized,  and eligible for utilization worldwide.</p>
                </div>
            </div>
            <div className="admission-advert-container">
                <span className="mdi mdi-speedometer"></span>
                <div>
                    <h6>Express Visa</h6>
                    <p>We guarantee an express entry and study visa. You don't have to worry about denial of your visa.</p>
                </div>
            </div>
            <div className="admission-advert-container">
                <span className="mdi mdi-school"></span>
                <div>
                    <h6>Express Admission</h6>
                    <p>We provide admission to schools that are recognized worldwide for their high standard of education and quality of service.</p>
                </div>
            </div>
        </div>
    );
};

export default Advert;