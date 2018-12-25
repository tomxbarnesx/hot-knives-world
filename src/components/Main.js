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
                            <a href="https://open.spotify.com/album/0OZ2gc7x11SAG7rUy2nsLo?si=SlFd5s9xTq6exOgBWYdS7w" target="_blank"><img src="images/Spotify_Icon_RGB_White.png" width="100%" alt="Spotify" /></a>
                        </div>
                        <div className="platform">
                            <a href="https://itunes.apple.com/ca/album/static-bloom-single/1414182237" target="_blank"><img src="images/Apple_Music_Icon_White.png" width="100%" alt="Apple Music" /></a>
                        </div>
                        <div className="platform">
                            <a href="https://hotknivesworld.bandcamp.com/releases" target="_blank"><img src="images/bandcamp-button-bc-circle-white-512.png" width="100%" alt="Bandcamp" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main