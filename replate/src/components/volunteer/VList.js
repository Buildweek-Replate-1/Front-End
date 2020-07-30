import React from 'react';
import {Link} from 'react-router-dom';

const VList = props => {
    //{props.food.foodType} = name of the foodType in the array
    //{props.food.id} = id of the food in the array
    //{props.userId} = id of the current logged-in user
    return (
        <Link to={`/volunteer/pickups/${props.food.id}`}>
            <div style={{width: '200px', height: '70px', margin: '10px 0', background: '#EACEA4', borderRadius: '30px', boxShadow: '5px 5px 5px #C0C0C0A0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{fontWeight: 'bold'}}>{props.food.foodType}</p>
            </div>
        </Link>
    );
};

export default VList;