import React from 'react';
import { object, string } from 'prop-types';
import { emojify } from 'react-emoji';

const Message = ({ message, name }) => {

    const { user, text } = message;
    
    let sendCurrentUser;

    const nameTrim = name.trim().toLowerCase();
    if(user === nameTrim) {
        sendCurrentUser = true;
    }
    return (
        sendCurrentUser ?
        (
            <div className='messageContainer-end'>
                <p>{name}:</p>
                <div className='messageBox'>
                    <p>{emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className='messageContainer-start'>
                <div>
                <p>{emojify(text)}:</p>
                </div>
                <p>{user}</p>
            </div>
        )
    );
};

export default Message;

Message.propTypes = {
    message: object,
    name: string,
};