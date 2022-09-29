import React from 'react';
import './ActivityCart.css'

const ActivityCart = (props) => {
    const {cart}=props;
  let total =0;
  for(const activity of cart){
    total=total+activity.time;
  }
    return (
        <div className='cart'>
           <div className='personal-info'>
           <div className='person'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPOhaOAhTSnke_pzKu0D5nXhbI4Ryish4HA&usqp=CAU" alt="" />
           </div>
           <div className='location'>
              <p>Infinite Curly</p>
                <p>London, Uk</p>
           </div>
           </div>

           <div className='Bmi-info'>
            <div className='height'>
                <p>5.6 </p>
                <p>Height</p>
                </div>
            <div className='weight'>
                <p>65 <span><small>kg</small></span></p>
                <p>Weight</p>
            </div>
            <div className='age'>
                <p>23 </p>
                <p>Age</p>
            </div>

           </div>

           <div className='break-time'>
            <p>Add A Break</p>
           </div>
          
           <button className='btn-time'>ExerciseTime:  {total} Minute</button>
        </div>
    );
};

export default ActivityCart;