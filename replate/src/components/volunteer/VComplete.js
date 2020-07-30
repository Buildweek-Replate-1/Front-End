import React from 'react';
import {connect} from 'react-redux';
import VList from './VList';

const VComplete = props => {
    const testCompletes = (foodArray) => {
        let cmp = [];
        for(let item = 0; item < foodArray.length; item++) {
            if(foodArray[item].status === 'Complete') {
                if(foodArray[item].volunteerAccountID === props.id) {
                    cmp.push(foodArray[item]);
                }
            }
        }
 
        console.log('VComplete filtered foodList:', cmp);
 
        return cmp.length > 0 ? cmp.map(cmpItem => <div><VList key={cmpItem.id} food={cmpItem} userId={props.id}/></div>) : <div>None</div>
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Completed Pickups</h3>
            {testCompletes(props.pickups)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id,
        pickups: state.pickups
    };
};

export default connect(mapStateToProps, {})(VComplete);