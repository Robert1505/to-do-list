import React from 'react';
import Title from './components/SetYourGoals/Title';
import Subtitle from './components/SetYourGoals/Subtitle';
import InputField from './components/SetYourGoals/InputField';
import List from './components/SetYourGoals/List';
import {connect} from 'react-redux';
import './styles/custom.css';
import Button from './components/SetYourGoals/Button';


function SetYourGoals(props) {
    return (
        <div className = "neblurat">
            <Title />      
            <Subtitle />
            <InputField />
            <List elemente = {props.goals} />
            <Button />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals.goals,
    };
};

export default connect(mapStateToProps)(SetYourGoals);