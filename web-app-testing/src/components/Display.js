//Show the results of buttons after clicked
import React from 'react';

const Display = (props) => {
    return (
        <div className='scoreboard'>
            <div className='strike'>
                <h3 className='strikeTitle'>Strikes</h3>
                <div className='strikeScore'>{props.strike}</div>
            </div>
            <div className='ball'>
                <h3 className='ballTitle'>Balls</h3>
                <div className='ballScore'>{props.ball}</div>
            </div>
        </div>
    )
}

export default Display;