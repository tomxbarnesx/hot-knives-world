import React from 'react'
import './Shows.css'

const Show = (props) => {
    
    const otherBands = props.show.lineup.join(' / ');

    return (
        <div className="show-list-item">
            <a name="shows" />
            <h3>{props.show.date} — {props.show.venue} </h3>
            <p>{otherBands}</p>
            <hr />
        </div> 
    )
}

export default Show