import React, { useEffect} from 'react';
import { object } from 'prop-types';
import io from 'socket.io-client';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
    // const [socket, setSocket] = useState(null);
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const room = urlParams.get('room');
        const name = urlParams.get('name');

        socket = io(ENDPOINT);
        console.log(socket);
        socket.emit('login', {name, room}, ({ error }) => {
            console.log(error);
        });

        return () => {
            socket.emit('disconnect', () => {
                console.log('left');
            });
            socket.off();
        }
    }, [ENDPOINT, location.search]);
    return (
        <div>Chat</div>
    )
};

export default Chat;

Chat.propTypes = {
    location: object,
};