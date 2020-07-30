import React, {useState} from 'react';
import {connect} from 'react-redux';
import {newPickup} from '../../actions/allActions';
​
const blankOrder = {
    foodType: '',
    amount: '',
    preferredPickupTime: ''
};
​
const OrderForm = props => {
    const [newOrder, setNewOrder] = useState(blankOrder);
​
    const updateOrder = evt => {
        const {name, value} = evt.target;
​
        setNewOrder({...newOrder, [name]: value});
    };
​
    const submitPickup = evt => {
        evt.preventDefault();
​
        console.log('Checking new Pickup order details', newOrder);
        props.newPickup(newOrder);
​
        clearForm();
    };
​
    const clearForm = evt => {
        setNewOrder(blankOrder);
    };
​
    return (
        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={submitPickup}>
            <h3>New Pickup Form</h3>
            <div style={{width: '360px', height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div><label>Type of Food:</label></div>
                <div><input type='text' name='foodType' value={newPickup.foodType} onChange={updateOrder} /></div>
            </div>
            <div style={{width: '360px', height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div><label>Amount of Food:</label></div>
                <div><input type='text' name='amount' value={newPickup.amount} onChange={updateOrder} /></div>
            </div>
            <div style={{width: '360px', height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div><label>Pickup Time Range:</label></div>
                <div><input type='text' name='preferredPickupTime' value={newPickup.preferredPickupTime} onChange={updateOrder} /></div>
            </div>
            <div style={{width: '360px', height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <button>Submit Order</button>
                <input type='button' value='Clear Form' onClick={clearForm} />
            </div>
        </form>
    );
};
​
const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        pickups: state.pickups
    };
};
​
export default connect(mapStateToProps, {newPickup})(OrderForm);