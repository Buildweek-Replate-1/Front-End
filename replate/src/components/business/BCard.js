import React, {useEffect, useState} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {updatePickup} from '../../actions/allActions';

const BCard = props => {
    const {id} = useParams();
    const history = useHistory();

    const allOrders = useSelector((state) => state.pickups);
    const [foodItem, setItem] = useState({});
    const dispatch = useDispatch(); // According to my notes, may be used in DELETE calls

    useEffect(() => {
        allOrders.forEach(order => {
            if(order.id === Number(id)) {
                setItem(order); //This should fill foodItem with the correct id
            }
        });
    }, []);

    const editOrder = evt => {
        evt.preventDefault();

        // const editData = {
        //     id: props.pickups.id
        // };

        // props.updatePickup(editData);

        //This needs to create a form to edit details first
    };

    const deleteOrder = evt => {
        evt.preventDefault();
    };
    
    console.log('FOODITEM', foodItem);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>Food ID: {foodItem.id}</div>
            <div>FoodType: {foodItem.foodType}</div>
            <div>Amount: {foodItem.amount}</div>
            <div>Time: {foodItem.preferredPickupTime}</div>
            <div>Business ID: {foodItem.businessAccountID}</div>
            <div>Status: {foodItem.status}</div>
            <div>Assigned ID: {foodItem.volunteerAccountID}</div>
            <div>Logged Bsn ID: {props.id}</div>
            <div>Logged Bsn Username: {props.username}</div>
            <div style={{width: '300px', display: 'flex', justifyContent: 'space-between'}}>
                {(foodItem.status === 'Pending' && foodItem.businessAccountID === props.id) ? <input type='button' value='Edit Details' onClick={editOrder} /> : <></>}
                {(foodItem.status !== 'Complete' && foodItem.businessAccountID === props.id) ? <input type='button' value='Cancel Pickup' onClick={deleteOrder} /> : <></>}
                {(foodItem.status === 'Complete' && foodItem.businessAccountID === props.id) ? <input type='button' value='Clear Complete' onClick={deleteOrder} /> : <></>}
                <Link to='/business'><input type='button' value='Go Back' /></Link>
            </div>
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

export default connect(mapStateToProps, {updatePickup})(BCard);