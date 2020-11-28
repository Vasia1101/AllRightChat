import React from 'react';
import { object, string } from 'prop-types';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

const Messages = ({ messages, name }) => (
   <ScrollToBottom>
       {messages
        .filter(Boolean)
        .map((item, index) => 
            <div key={index}><Message message={item} name={name}/></div>)    
        }
   </ScrollToBottom>
);

export default Messages;

Messages.propTypes = {
    messages: object,
    name: string,
};