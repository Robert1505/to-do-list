import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addGoal} from '../../actions';

function InputField(props) {

    const[goal, setGoal] = useState("");

    return (
        <div>
            <input onChange={e => setGoal(e.target.value)} value={goal} className = "font-bold inputColor ml-16 border-2 border-black px-4 py-2 bg-transparent text-white" placeholder = "Set your next GOAL" />
            <button onClick = {() => props.addGoal(goal)} className = "ml-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-500 border-2 border-black font-bold">
                Add GOAL
            </button>
        </div>
    )
}


export default connect(null,{
    addGoal
})(InputField);