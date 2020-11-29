import React, { useState, useEffect} from 'react';
import { object } from 'prop-types';
import io from 'socket.io-client';

import Header from './subcomponents/Header';
import Messages from './subcomponents/Messages';
import Form from './subcomponents/Form';
import UsersActive from './subcomponents/UsersActive';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    const urlParams = new URLSearchParams(location.search);
    const room = urlParams.get('room');
    const name = urlParams.get('name');
    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit('login', {name, room}, (error) => {
            if(error) {
                console.log(error);
            }
        });

        return () => {
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });

        socket.on('roomData', ({ users }) => {
           setUsers(users); 
        });
    }, [messages.length]);

    const sendMessage = event => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };
    
    return (
        <div className="join-now">
            <div className="container">
                <Header room={room}/>
                <Messages messages={messages} name={name}/>
                <Form 
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
                <UsersActive users={users} />
            </div>
        </div>
    )
};

export default Chat;

Chat.propTypes = {
    location: object,
};