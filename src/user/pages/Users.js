import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
const USERS = [
    {
    id: 'u1', 
    name: 'Max P:ower', 
    image: 'https://www.pexels.com/photo/fashion-photography-of-woman-hands-on-chin-with-glitter-makeup-1081685/', 
    places: 3
    }
];

    return <UsersList items={USERS}/>
};

export default Users;