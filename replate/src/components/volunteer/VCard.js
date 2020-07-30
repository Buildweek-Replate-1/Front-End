import React, {useEffect, useState} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {updatePickup} from '../../actions/allActions';

const VCard = props => {
    const {id} = useParams();
    const history = useHistory();

    const allPickups = useSelector((state) => state.pickups);
    const [foodItem, setItem] = useState({});
    const dispatch = useDispatch(); // According to my notes, may be used in DELETE calls

    useEffect(() => {
        allPickups.forEach(order => {
            if(order.id === Number(id)) {
                setItem(order); //This should fill foodItem with the correct id
            }
        });
    }, []);

    const acceptPickup = evt => {
        evt.preventDefault();

        const acceptData = {
            id: props.pickups.id,
            status: 'Assigned'
        };

        props.updatePickup(acceptData);
        history.push('/volunteer');
    };

    const rejectPickup = evt => {
        evt.preventDefault();

        const rejectData = {
            id: props.pickups.id,
            status: 'Pending'
        };
        
        props.updatePickup(rejectData);
        history.push('/volunteer');
    };

    const completePickup = evt => {
        evt.preventDefault();

        const completeData = {
            id: props.pickups.id,
            status: 'Complete'
        };
        
        props.updatePickup(completeData);
        history.push('/volunteer');
    };

    const deletePickup = evt => {
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
            <div>Logged Vol ID: {props.id}</div>
            <div>Logged Vol Username: {props.username}</div>
            <div style={{width: '300px', display: 'flex', justifyContent: 'space-between'}}>
                {foodItem.status === 'Pending' ? <input type='button' value='Accept' onClick={acceptPickup} /> : <></>}
                {(foodItem.status === 'Assigned' && foodItem.volunteerAccountID === props.id) ? <input type='button' value='Complete' onClick={completePickup} /> : <></>}
                {(foodItem.status === 'Pending' || (foodItem.status === 'Assigned' && foodItem.volunteerAccountID === props.id)) ? <input type='button' value='Reject' onClick={rejectPickup} /> : <></>}
                {(foodItem.status === 'Complete' && foodItem.volunteerAccountID === props.id) ? <input type='button' value='Clear Complete' onClick={deletePickup} /> : <></>}
                <Link to='/volunteer'><input type='button' value='Go Back' /></Link>
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

export default connect(mapStateToProps, {updatePickup})(VCard);