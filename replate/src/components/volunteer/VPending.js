import React, {useEffect} from 'react';
import {connect} from 'react-redux';
//import {getPendingPickups} from '../../actions/allActions';

const VPending = props => {
    /*
    useEffect(() => {
        props.getPendingPickups();
        console.log('VPending Pickups check:', props.pickups);
    }, [props.pickups]);
    */

    const foodList = props.pickups;
    console.log('foodList is:', foodList);

    const testPending = (foodArray) => {
        /*
        let pends = foodArray.filter(item => {
            return item.status === 'Pending'
        });

        return pends.map(pendItem => <div>{pendItem.foodType}</div>)
        */
       let pends = [];
       for(let item = 0; item < foodArray.length; item++) {
           if(foodArray[item].status === 'Pending') {
               pends.push(foodArray[item]);
           }
       }

       console.log('Testing filtered foodList:', pends);

       return pends.length > 0 ? pends.map(pendItem => <div>{pendItem.foodType}</div>) : <div>None</div>
    };

    return (
        <div>
            <h3>Pending Pickups</h3>
            <p>Test ALL Pickups</p>
            {props.pickups.length > 0 ? props.pickups.map(item => <div>{item.foodType}</div>) : <div>None</div>}
            <br /><p>Test Pending ONLY</p>
            {testPending(props.pickups)}
        </div>
    );
};

const mapStateToProps = state => {
    console.log('STATE: Pickups', state);
    return {
        //username: state.currentUser.username,
        pickups: state.pickups
    };
};

export default connect(mapStateToProps, {})(VPending);