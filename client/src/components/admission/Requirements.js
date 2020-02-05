import React from 'react';
import { Link } from 'react-router-dom';

const Requirements = () => {
    return (
        <section className="requirements">
            <h4>Admission Requirements</h4>
            <p>The following are requirements for gaining admission.</p>
            <ul>
                <li><span className="mdi mdi-checkbox-marked-outline"></span>Official Transcript of Records with Red Ribbon (3 copies)</li>
                <li><span className="mdi mdi-checkbox-marked-outline"></span>Police Clearance</li>
                <li><span className="mdi mdi-checkbox-marked-outline"></span>Affidavit of Support with Bank Statement</li>
                <li><span className="mdi mdi-checkbox-marked-outline"></span>Photocopy of the pages of your passport</li>
                <li><span className="mdi mdi-checkbox-marked-outline"></span>Personal History Statement</li>
                <li><span className="mdi mdi-checkbox-marked-outline"></span>Quarantine Medical Examination Results</li>
            </ul>
            <div>
                <Link to="/admissions/apply">Apply Now</Link>
            </div>
        </section>
    );
};

export default Requirements;