import React from 'react';
import { array } from 'prop-types';

const UsersActive = ({ users }) => (
   <div className='active_user'>
       <p>Active users in chat: </p>
       {
           users && <div className='user'>
               {
                   users.map(({ name }) => (
                   <div key={name}>{name}; </div>
                   ))
               }
           </div>
       }
   </div>
);

export default UsersActive;

UsersActive.propTypes = {
    users: array,
};