import React, {useState} from 'react';
import {connect} from 'react-redux';

function Objectives({label, checked, idx}) {
    
    /* const moveUp = () => {
        swap(idx, idx - 1);
    }

    const moveDown = () => {
        swap(idx, idx + 1);
    } */

    return (
        <div>
            <input id='label' type='checkbox' checked={checked}/>
            <label value = {label} for='label'>
                <h2> {label} </h2>   
            </label>
            {/*<button onClick={() => moveUp()}>Move up</button>
            <button onClick={() => moveDown()}>Move down</button> */}
        </div>
    )
}

export default connect(null,{

})(Objectives);
