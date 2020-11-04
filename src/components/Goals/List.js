import React, {useState} from 'react';
import { connect } from 'react-redux';
import Objectives from './Objectives';

function List(props) {
    
    return (
        <div>
            {
                props.goals.map((goal,idx) => (
                    <Objectives key = {`todo-${idx}`} label= {goal.name} checked={goal.checked} idx={idx} />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        goals : state.goals.goals,
    }
}

export default connect(mapStateToProps, {

})(List);
