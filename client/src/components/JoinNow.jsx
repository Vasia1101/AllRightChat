import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './subcomponents/Input.jsx';

import { camelToKebab } from '../helpers/camelToKebab.js';
import { errorMessage } from '../helpers/constans.js';
const JoinNow = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [error, setError] = useState([]);

    const inputProps = [
        {
            placeholder: 'Name',
            className: 'join-now-input mb-20',
            onChange: setName,
        },
        {
            placeholder: 'Room',
            className: 'join-now-input mb-20',
            onChange: setRoom,
        }
    ];

    const handleInput = (e, callBack) => {
        callBack(e.target.value);
    };

    const handleClick = e => {
        if (!name || !room) {
            e.preventDefault(); 
            setError([errorMessage]);
        } else null
    };

    useEffect(() => {
        setError([]);
    }, [name || room]);

    return (
        <div className="join-now">
            <div className="container">
                <h1 className="heading">Welcome</h1>
                {inputProps.map(item => (
                    <div key={camelToKebab(item.placeholder)}>
                    <Input

                        placeholder={item.placeholder}
                        onChange={event => handleInput(event, item.onChange)}
                        type={item.type}
                        className={item.className}
                    />
                    </div>
                ))}
                {error.length ? <p className='error mb-20'>{error}</p> : null}
                <Link 
                    onClick={event => handleClick(event)} 
                    to={`/chat?name=${name}&room=${room}`}
                    >
                    <button className="join-now-button mb-20" type="submit">Login</button>
                </Link>
            </div>
        </div>
    )
};

export default JoinNow;