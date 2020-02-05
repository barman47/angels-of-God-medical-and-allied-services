import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ProfileTextInput = ({
    label,
    type,
    id,
    name,
    value,
    placeholder,
    onChange,
    icon,
    info,
    title,
    disabled,
    errorMessage
}) => (
        <div className="input-field profile-input">
            {/* <span className={`${icon} prefix`}></span> */}
            <input 
                className={classnames('form-input validate', {
                    'invalid': errorMessage
                })}
                id={id}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                title={title}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id}>{label}</label>
            {info ? (<span className="helper-text">{info}</span>) : null}
            {errorMessage ? (<span className="helper-text invalid-text">{errorMessage}</span>) : null}
        </div>
);

ProfileTextInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string.isRequired,
    icon: PropTypes.string,
    info: PropTypes.string,
    title: PropTypes.string,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

ProfileTextInput.defaultProps = {
    type: 'text'
};

export default ProfileTextInput;