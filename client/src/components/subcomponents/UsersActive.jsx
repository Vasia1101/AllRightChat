import React from 'react';
import { array } from 'prop-types';

const UsersActive = ({ users }) => (
   <div>
       {
           users && <div>
               {
                   users.map(({ name }) => (
                   <div key={name}>{name}</div>
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