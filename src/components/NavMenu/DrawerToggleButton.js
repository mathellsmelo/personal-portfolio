import React from 'react';

import './DrawerToggleButton.css';

const NavButton = () => (
    <div className="container">
        <button className="toggle-button">
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>
    </div>
);

export default NavButton;