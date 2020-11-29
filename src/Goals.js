import React from 'react';
import Title from './components/Goals/Title';
import Timer from './components/Goals/Timer';
import Objectives from './components/Goals/Objectives';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


function Goals(props) {
    const labels = [...props.goals];
    const renderList = () => {
        return labels.map((el,idx) => {
            let max = labels.length - 1;
            return(
                <div key = {`obj-${idx}`}>
                    <Objectives label = {el.name} id={el.id} idx={idx} completed = {el.completed} max = {max}/>
                </div>
            )
        });
    }


    return (
        <div>
            <Title />
            <Timer />
            {renderList()}
            <div className = "text-center absolute inset-x-0 bottom-0 mb-8">
                <Link to = '/'>
                    <button className={`font-bold py-2 px-4 bg-red-700 text-white rounded hover:bg-red-600 border-2 border-black`}>
                        Add a new goal
                    </button>
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals.goals,
    };
};

export default connect(mapStateToProps)(Goals);
