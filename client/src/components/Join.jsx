import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleOnChange = (eve, func) => {
        func(eve.target.value);
        console.log(name, room);
    };

    return (
        <div>
            <div>
                <h1>Join</h1>
                <div><input placeholder="Name" className="" type="text" onChange={event => handleOnChange(event, setName)}/></div>
                <div><input placeholder="Room" className="" type="text" onChange={event => handleOnChange(event, setRoom)}/></div>
                <Link to={'/'}>
                    <button className="" type="submit">Choose the room</button>
                </Link>
            </div>
        </div>
    )
};

export default Join;