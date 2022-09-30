import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav.scss';
import { faEarth, faStream } from '@fortawesome/free-solid-svg-icons';
import { faBell, faMoon, faSquare, faMessage } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
    return (
        <div className="navbars">
            <div className="wrappers">
                <input type="text" placeholder="search" />
            </div>
            <div className="items">
                <div className="item">
                    <FontAwesomeIcon className="icon" icon={faEarth} />
                    English
                </div>
            </div>
            <div className="items">
                <div className="item">
                    <FontAwesomeIcon className="icon" icon={faMoon} />
                </div>
            </div>
            <div className="items">
                <div className="item">
                    <FontAwesomeIcon className="icon" icon={faSquare} />
                </div>
            </div>
            <div className="items">
                <div className="item">
                    <FontAwesomeIcon className="icon" icon={faBell} />
                    <div className="couter">1</div>
                </div>
            </div>
            <div className="items">
                <div className="item">
                    <FontAwesomeIcon className="icon" icon={faMessage} />
                    <div className="couter">1</div>
                </div>
            </div>
            <div className="items">
                <div className="item">
                    <FontAwesomeIcon className="icon" icon={faStream} />
                </div>
            </div>
            <div className="items">
                <img
                    className="avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                    alt="avatar"
                />
            </div>
        </div>
    );
}

export default Navbar;
