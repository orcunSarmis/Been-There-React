import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
const USERS = [
    {
    id: 'u1', 
    name: 'Max Power', 
    image: 'https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?cs=srgb&dl=pexels-leah-kelley-185933.jpg&fm=jpg', 
    places: 3
    }
];

    return <UsersList items={USERS} />;
};

export default Users;