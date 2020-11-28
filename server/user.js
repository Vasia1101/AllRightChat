const users = [];

const trimValue = value => value.trim().toLowerCase();

const addUser = ({
    id,
    name,
    room,
}) => {
    name = trimValue(name);
    room = trimValue(room);

    const checkUser = users.find( user => user.room === room && user.name === name);

    if(checkUser) {
        return { error: 'Username is already taken'};
    };

    const user = { id, name, room };

    users.push(user);

    return { user }
};

const removeUser = id => {
    const index = users.findIndex(user => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    };
};

const getUser = id => users.find(user => user.id === id);

const getUserInRoom = room => users.filter(user => user.room === room);

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom,
}