import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
const USERS = [
    {
    id: 'u1', 
    name: 'Max Power', 
    image: 'https://unsplash.com/photos/oLAPFDbLkOw', 
    places: 3
    }
];

    return <UsersList items={USERS} />;
};

export default Users;