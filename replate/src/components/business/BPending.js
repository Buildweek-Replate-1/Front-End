import React from 'react';
import {connect} from 'react-redux';
import BList from './BList';


const BPending = props => {
    const foodList = props.pickups;
    console.log('foodList is:', foodList);

    const testPending = (foodArray) => {
        let pends = [];
        for(let item = 0; item < foodArray.length; item++) {
            if(foodArray[item].status === 'Pending') {
                if(foodArray[item].businessAccountID === props.id) {
                    pends.push(foodArray[item]);
                }
            }
        }
 
        console.log('BPending filtered foodList:', pends);
 
        return pends.length > 0 ? pends.map(pendItem => <div><BList key={pendItem.id} food={pendItem} userId={props.id}/></div>) : <div>None</div>
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Pending Pickups</h3>
            {testPending(props.pickups)}
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

export default connect(mapStateToProps, {})(BPending);