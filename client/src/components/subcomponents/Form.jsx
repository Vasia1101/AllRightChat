import React from 'react';
import {string, func} from 'prop-types';

const Form = ({
    message,
    sendMessage,
    setMessage
}) => (
    <form className='form'>
        <input
            className='input'
            type='text'
            placeholder='Type a message...'
            value={message}
            onChange={event => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className='button' onClick={event => sendMessage(event)}>Send Message</button>
    </form>
);

export default Form;

Form.propTypes = {
    message: string,
    sendMessage: func,
    setMessage: func,
};