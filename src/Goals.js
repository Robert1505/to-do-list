import React from 'react';
import Title from './components/Goals/Title';
import Timer from './components/Goals/Timer';
import List from './components/Goals/List';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

function Goals(props) {
    const labels = [...props.goals];
    console.log('labels', labels)
    const renderList = () => {
        return labels.map((el,idx) => {
            return(
                console.log('I render'),
                <div key = {idx}>
                    <List label = {el.name} />
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
                    <button className={`font-bold py-2 px-4 bg-orange-600 text-white rounded hover:bg-orange-500 border-2 border-black`}>
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
