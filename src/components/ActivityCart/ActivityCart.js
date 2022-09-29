import React, { useState } from 'react';
import { addToDb } from '../../utilities/Utility';
import './ActivityCart.css'

const ActivityCart = (props) => {
    const {cart}=props;
    const [leisureTime, setLeisureTime]=useState([]);

    const handleTimeBreak=(e)=>{
        setLeisureTime(e.target.value);
        addToDb(e.target.value);
    }
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
            <div className='btn-TimeList'>
       <input onClick={handleTimeBreak}  className='btn-timeCount' type="button" value="10"/>
       <input onClick={handleTimeBreak}  className='btn-timeCount' type="button" value="20" />
       <input onClick={handleTimeBreak}  className='btn-timeCount' type="button" value="30" />
       <input onClick={handleTimeBreak}  className='btn-timeCount' type="button" value="40" />
            </div>
           </div>
          
          <p>Exercise Details</p>
           <button className='btn-time'>ExerciseTime:  {total} Minute</button>
        
           <button className='btn-time'>BreakTime:     {leisureTime} Second</button>

           <button className='btn-active'> Activity Complete</button>
        </div>
    );
};

export default ActivityCart;