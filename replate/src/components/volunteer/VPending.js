import React from 'react';
import {connect} from 'react-redux';
import VList from './VList';

const VPending = props => {
    const testPending = (foodArray) => {
        /*
        let pends = foodArray.filter(item => {
            return item.status === 'Pending'
        });

        return pends.map(pendItem => <div>{pendItem.foodType}</div>)
        */

        //Note: foodArray = props.pickups, so foodArray[0].foodType and foodArray[0].id = props.pickups[0]...
        let pends = [];
        for(let item = 0; item < foodArray.length; item++) {
            if(foodArray[item].status === 'Pending') {
                pends.push(foodArray[item]);
            }
        }

        //pends is now a filtered foodArray
        console.log('VPending filtered foodList:', pends);

        return pends.length > 0 ? pends.map(pendItem => <div><VList key={pendItem.id} food={pendItem} userId={props.id}/></div>) : <div>None</div>
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Pending Pickups</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '20px'}}>{testPending(props.pickups)}</div>
        </div>
    );
};

const mapStateToProps = state => {
    //console.log('STATE: Pickups', state);
    return {
        username: state.currentUser.username,
        id: state.currentUser.id,
        pickups: state.pickups
    };
};

export default connect(mapStateToProps, {})(VPending);