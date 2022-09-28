import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ActivityCart from '../ActivityCart/ActivityCart';
import './ActivityDetail.css'

const ActivityDetail = () => {
    const [activities, setActivities] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    return (
        <div className='container'>
           <div className='activity-container'>
          {
            activities.map(activity=><Activity
            key={activity.id}
            
            activity={activity}
            >
                
            </Activity>)
          }
           </div>
           <div>
           <ActivityCart></ActivityCart>
           </div>
        </div>

        
    );
};

export default ActivityDetail;