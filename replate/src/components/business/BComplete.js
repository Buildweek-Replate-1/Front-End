import React from 'react';
import {connect} from 'react-redux';
import BList from './BList';

const BComplete = props => {
    const testCompletes = (foodArray) => {
        let cmp = [];
        for(let item = 0; item < foodArray.length; item++) {
            if(foodArray[item].status === 'Complete') {
                if(foodArray[item].businessAccountID === props.id) {
                    cmp.push(foodArray[item]);
                }
            }
        }
 
        console.log('BComplete filtered foodList:', cmp);
 
        return cmp.length > 0 ? cmp.map(cmpItem => <div><BList key={cmpItem.id} food={cmpItem} userId={props.id}/></div>) : <div>None</div>};

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

export default connect(mapStateToProps, {})(BComplete);