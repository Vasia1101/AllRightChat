import React from 'react';
import { func, string } from 'prop-types';

const Input = ({
    placeholder,
    className,
    type,
    onChange,
}) => {
    return (
        <input

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
    placeholder: string,
    className: string,
    type: string,
    onChange: func.isRequired,
};
