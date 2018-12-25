import React, {Component} from 'react'
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

    iconFunction() {
        var x = document.getElementById("topNav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }

    render () {
        return (
        <div id="topNav" className="header-container">
            <div className="nav-button left-nav"><a href="#music">Music</a></div>
            <div className="nav-button left-nav">Videos</div>
            <div className="nav-button left-nav"><a href="#bio">About</a></div>
            <div className="logo-container">
                <img src="images/PNG.png" alt="Hot Knives" width="100%"/>
            </div>
            <div className="nav-button right-nav"><a href="#shows">shows</a></div>
            <div className="nav-button right-nav">photos</div>
            <div className="nav-button right-nav">contact</div>
            <div className="nav-hamburger">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
        )
    }
}

export default Header