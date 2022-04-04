import React from 'react';
import "./Story.css"
function Story(props) {
    return (
        <div className='story'>
            <img className="story__image" src={props.avatar} alt=""></img>
        </div>

    );
}

export default Story;