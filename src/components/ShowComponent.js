import React, { Component } from 'react'
import './Shows.css'
import Show from './Show'
import showData from '../showData';


class ShowComponent extends Component {
    constructor(){
        super();
        this.state = {
            showList: showData
        }
    }

    render() {
        const shows = this.state.showList.map((show) => {
            return <Show key={show.id} show={show} />
          })

        return (
            <div className="show-container">
                <h1>Upcoming Shows</h1>
                { shows }
            </div>
        )
    }
}

export default ShowComponent