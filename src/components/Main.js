import React, { Component } from 'react'
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="EP">
                    <img src="images/staticbloomEP.jpg" alt="Static Bloom cover" width="100%" />
                </div>
                <div className="platform-container">
                    <h2>STATIC BLOOM</h2>
                    <h3>Debut EP out now</h3>
                    <div className="platform-icons">
                        <div className="platform">
                            <img src="images/Spotify_Icon_RGB_White.png" width="100%" alt="Spotify" />
                        </div>
                        <div className="platform">
                            <img src="images/Apple_Music_Icon_White.png" width="100%" alt="Apple Music" />
                        </div>
                        <div className="platform">
                            <img src="images/bandcamp-button-bc-circle-white-512.png" width="100%" alt="Bandcamp" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main