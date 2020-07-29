import React from 'react';
import {connect} from 'react-redux';
import {testPickup} from '../../actions/allActions';

const TestButton = props => {
    const createTestOrders = evt => {
        evt.preventDefault();

        const test1 = {
            businessAccountID: 1,
            foodType: 'French Fries',
            amount: '14 cups',
            preferredPickupTime: 'Between 7 and 8 pm',
            status: 'Pending'
        };
        
        console.log('Checking Test1 Pickup data in VHead', test1);
        props.testPickup(test1);
        
        const test2 = {
            businessAccountID: 1,
            foodType: 'Caesar Salads',
            amount: '26 bowls',
            preferredPickupTime: 'Available now. Will toss after 9 pm',
            status: 'Pending'
        };
        
        console.log('Checking Test2 Pickup data in VHead', test2);
        props.testPickup(test2);
    };

    return (
        <div>
            <h3>New Pickup Form</h3><br />
            <input type='button' value='Test Pickup Orders' onClick={createTestOrders} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.pickups.id,
        foodType: state.pickups.foodType,
        amount: state.pickups.amount,
        preferredPickupTime: state.pickups.preferredPickupTime
    };
};

export default connect(mapStateToProps, {testPickup})(TestButton);