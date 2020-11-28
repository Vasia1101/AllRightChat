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
            <div className='messageContainer end'>
                <p className='text pr-10'>{nameTrim}</p>
                <div className='messageBox bg-blue'>
                    <p className='messageText'>{emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className='messageContainer start'>
                <div className='messageBox bg-light'>
                <p className='messageText'>{emojify(text)}</p>
                </div>
                <p className='text padLeft-10'>{user}</p>
            </div>
        )
    )
};

export default Message;

Message.propTypes = {
    message: object,
    name: string,
};