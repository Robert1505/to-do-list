import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { deleteGoal, swap, completeGoal, unverifyGoal } from '../../actions';

function Objectives({label, idx, id, deleteGoal, swap, completeGoal, completed, max, unverifyGoal}) {

    // state ca sa se vada butoanele
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(completed);
    const [myClasses, setMyClasses] = useState("");
    
    const moveUp = () => {
        swap(idx, idx - 1);
        setMyClasses("")
    }

    const moveDown = () => {
        swap(idx, idx + 1);
        setMyClasses("");
    } 

    useEffect(() => {
        console.log("m-am executat!");
        if(checked === true) {
            setChecked(true);
            setMyClasses("checked inputChecked");
        }
        else{
            setChecked(false);
            setMyClasses("");
        }
    }, [checked, label, myClasses]);

    const renderButtons = () => {
        if(idx === 0){
            return(
                <div className="mx-auto">
                    <button className = "px-1 mr-1 bg-gray-700 text-white rounded hover:bg-gray-600 border-2 border-black font-bold" onClick = {() => deleteGoal(id)}>Delete</button>
                    <button className = "px-1 ml-1 bg-gray-700 text-white rounded hover:bg-gray-600 border-2 border-black font-bold" onClick={() => moveDown()}>Move down</button>
                </div>
            )
        }
        if(idx === max){
            return (
                <div className="mx-auto">
                    <button className = "px-1 mr-1 bg-gray-700 text-white rounded hover:bg-gray-600 border-2 border-black font-bold" onClick = {() => deleteGoal(id)}>Delete</button>
                    <button className = "px-1 ml-1 mr-1 bg-gray-700 text-white rounded hover:bg-gray-600 border-2 border-black font-bold" onClick={() => moveUp()}>Move up</button>
                </div>
            )
        }
        return (
            <div className="mx-auto">
                <button className = "px-1 mr-1 bg-gray-700 text-white rounded hover:bg-gray-600 border-2 border-black font-bold" onClick = {() => deleteGoal(id)}>Delete</button>
                <button className = "px-1 ml-1 mr-1 bg-gray-700 text-white rounded hover:bg-gray-600 border-2 border-black font-bold" onClick={() => moveUp()}>Move up</button>
                <button className = "px-1 ml-1 bg-gray-700 text-white rounded hover:bg-gray-600 border-2 border-black font-bold" onClick={() => moveDown()}>Move down</button>
            </div>
        )
    }

    /// TODO : FIX THIS
    const renderLabelClasses = () => {
        if (checked === false) {
            return "";
        } 
        else {
            return " checked";
        }
    }

    const inputChecked = () => {
        if(checked === false){
            return "";
        }
        else{
            return "inputChecked";
        }
    }

    const handleClick = () => {
        setChecked(!checked);
        if (!checked) {
            completeGoal(id);
        } else {
            unverifyGoal(id);
        }
        
    }

    return (
        <div onMouseEnter={() => {
            setShow(true)
        }}
        
        onMouseLeave={() => {
            setShow(false)
        }} className="flex flex-col">
            <div>
                <label onClick={() => handleClick()} className = {`list ${renderLabelClasses()} ${myClasses}`} value = {label} for='label' key = {idx}>
                    <h2> {label} </h2>   
                </label>
                <input id='label' type='checkbox' checked={checked} key = {idx} onChange={() => {
                    console.log("input changed");
                }}/>
            </div>
            
            {
                show === true ? renderButtons() : ""
            }  
        </div>
    )
}

export default connect(null,{
    deleteGoal, swap, completeGoal, unverifyGoal
})(Objectives);
