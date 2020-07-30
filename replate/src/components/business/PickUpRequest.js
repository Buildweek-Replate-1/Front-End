import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {registerRequest} from '../actions/allActions';
import {connect} from 'react-redux';


const dummyPickupRequest = {
    businessAccountID: 1,
    foodType: 'Leftover Milkshakes',
    amount: '173 Gallons',
    preferredPickupTime: 'before Midnight',
    status: 'Pending'
};



