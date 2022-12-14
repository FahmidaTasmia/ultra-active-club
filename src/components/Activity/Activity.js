import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const{img,name,about,time,age }=props.activity;
    const{activity,handleAddTimeToCart}=props;
    return (
        <div className='activity' >
            <div className='container-detail' >
            <img src={img} alt="" />
            <div className='activity-text'>
            <h4>{name}</h4>
            <p>{about}</p>
            <p>Time:{time}m</p>
            <p>For age:{age}</p>
            </div>
            <button onClick={()=>handleAddTimeToCart(activity)} className='btn-cart'><p>Add To List</p></button>
            </div>
        </div>
    );
};

export default Activity;