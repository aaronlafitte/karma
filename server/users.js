const USERS = [];
const ROOMS = [];

const addUser = ({ id, name, room }) => {
  name = name.trim()
  room = room.trim().toLowerCase();
  if (!name || !room) return { error: 'Username and room are required.' };

  const existingUser = USERS.find((user) => user.room === room && user.name === name);
  if (existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };

  USERS.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = USERS.findIndex((user) => user.id === id);

  if (index !== -1) return USERS.splice(index, 1)[0];
}

const getUser = (id) => USERS.find((user) => user.id === id);

const getUsersInRoom = (room) => USERS.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };