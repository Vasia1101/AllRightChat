import React from 'react';
import { string } from 'prop-types';

import close from '../../icons/close.svg';
import group from '../../icons/group.svg';

const Header = ({ room }) => (
    <div className='header'>
        <div>
            <img className='group' src={group} alt='online'/>
        </div>
            <h3>Room:{room}</h3>
        <div>
            <a href='/' alt='close'>
                <img className='close' src={close} alt='close'/>
            </a>
        </div>
    </div>
);

export default Header;

Header.propTypes = {
    room: string,
};