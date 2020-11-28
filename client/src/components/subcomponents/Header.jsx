import React from 'react';
import { string } from 'prop-types';

const Header = ({ room }) => (
    <div className='header'>
        <div className='left-header-container'>
            <img className='close' src={'#'} alt='image_online'/>
            <h3>{room}</h3>
        </div>
        <div className='right-header-container'>
            <a href='/' src={'#'} alt='close'>close</a>
        </div>
    </div>
);

export default Header;

Header.propTypes = {
    room: string,
};