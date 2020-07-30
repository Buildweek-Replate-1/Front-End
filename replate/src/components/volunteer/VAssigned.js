import React from 'react';
import {connect} from 'react-redux';
import VList from './VList';

const VAssigned = props => {
    const testAssigned = (foodArray) => {
        let asgn = [];
        for(let item = 0; item < foodArray.length; item++) {
            if(foodArray[item].status === 'Assigned') {
                if(foodArray[item].volunteerAccountID === props.id) {
                    asgn.push(foodArray[item]);
                }
            }
        }
 
        console.log('VAssigned filtered foodList:', asgn);
 
        return asgn.length > 0 ? asgn.map(asgnItem => <div><VList key={asgnItem.id} food={asgnItem} userId={props.id}/></div>) : <div>None</div>
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Assigned Pickups</h3>
            {testAssigned(props.pickups)}
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

export default connect(mapStateToProps, {})(VAssigned);