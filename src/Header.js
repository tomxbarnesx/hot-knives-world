import React, {Component} from 'react'
import './Header.css';


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
            <div className="nav-button left-nav">Music</div>
            <div className="nav-button left-nav">Videos</div>
            <div className="logo-container">
                <img src="/images/PNG.png" alt="Hot Knives" width="100%"/>
            </div>
            <div className="nav-button right-nav">shows</div>
            <div className="nav-button right-nav">contact</div>
        </div>
        )
    }
}

export default Header