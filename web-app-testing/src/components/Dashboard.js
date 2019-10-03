//buttons
import React from 'react';


const Dashboard = props => {
    return (
        <div>
            <button className='strikeButton'>Strike</button>
            <button className='ballButton'>Ball</button>
            <button onClick={() => setFoul(props.addFoul)} className='foulButton'>Foul</button>
            <button className='hitButton'>Hit</button>
        </div>
    )
}

export default Dashboard;