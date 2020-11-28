import React, { useState, useEffect} from 'react';
import { object } from 'prop-types';
import io from 'socket.io-client';

import Header from './subcomponents/Header';
import Messages from './subcomponents/Messages';
import Form from './subcomponents/Form';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const urlParams = new URLSearchParams(location.search);
    const room = urlParams.get('room');
    const name = urlParams.get('name');
    useEffect(() => {

        socket = io(ENDPOINT);
        console.log(socket);
        socket.emit('login', {name, room}, (error) => {
            console.log(error);
        });

        return () => {
            socket.emit('disconnect', () => {
                console.log('left');
            });
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = event => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };
    console.log(messages, message);
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
            </div>
        </div>
    )
};

export default Chat;

Chat.propTypes = {
    location: object,
};