import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
const USERS = [
    {
    id: 'u1', 
    name: 'Max Power', 
    image: 'https://unsplash.com/photos/KKkFVb7nqaw.jpg', 
    places: 3
    }
];

    return <UsersList items={USERS} />;
};

export default Users;