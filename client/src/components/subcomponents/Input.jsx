import React from 'react';
import { func, string } from 'prop-types';

const Input = ({
    keyId,
    placeholder,
    className,
    type,
    onChange,
}) => {
    return (
        <input
            key={keyId} 
            placeholder={placeholder}
            className={className}
            type={type}
            onChange={onChange}
            autoComplete='off'
        />
    );
};

export default Input;

Input.propTypes = {
    keyId: string,
    placeholder: string,
    className: string,
    type: string,
    onChange: func.isRequired,
};