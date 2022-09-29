const addToDb=(e)=>{
    let BreakTime={};
    const quantity =BreakTime[e];
    if(!quantity){
        BreakTime[e]=1;
    }
    localStorage.setItem("break-time",JSON.stringify(BreakTime));
}

const getStoreTime=()=>{
    let breakTime ={};
    const storeBreakTime = localStorage.getItem("break-time");
    if(storeBreakTime){
        breakTime=JSON.parse(storeBreakTime);
    }
    return breakTime;
}

export{addToDb,getStoreTime};