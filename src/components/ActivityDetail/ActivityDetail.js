import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ActivityCart from '../ActivityCart/ActivityCart';
import './ActivityDetail.css'

const ActivityDetail = () => {
    const [activities, setActivities] = useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

const  handleAddTimeToCart=(activity)=>{
    console.log(activity);
    const newCart=[...cart,activity];
    setCart(newCart);
}
    return (
        <div className='container'>
           <div className='activity-container'>
          {
            activities.map(activity=><Activity
            key={activity.id}
            
            activity={activity}
            handleAddTimeToCart={handleAddTimeToCart}
            >
            </Activity>)
          }
           </div>
           <div className='cart'>
           <ActivityCart cart={cart}>
           
           </ActivityCart>
           </div>
        </div>

        
    );
};

export default ActivityDetail;