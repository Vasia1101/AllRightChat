import React from 'react';
import { array, string } from 'prop-types';

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
            <div className='messageContainer end'>
                <p className='text pr-10'>{nameTrim}</p>
                <div className='messageBox bg-blue'>
                    <p className='messageText'>{text}</p>
                </div>
            </div>
        ) : (
            <div className='messageContainer start'>
                <div className='messageBox bg-light'>
                <p className='messageText'>{text}</p>
                </div>
                <p className='text padLeft-10'>{user}</p>
            </div>
        )
    )
};

export default Message;

Message.propTypes = {
    message: array,
    name: string,
};