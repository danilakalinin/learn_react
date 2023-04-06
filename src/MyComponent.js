import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MyComponent() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count)


  const addCount =(count) =>{
    dispatch({type:"ADD_COUNT", countload: 1})
  }

  const getCount =(count) =>{
    dispatch({type:"GET_COUNT", countload: 1})
  }
 
  return (
    <div>
      <div style={{display:"flex"}}>
      <div style={{fontSize:"3rem"}}>{count}</div>
        <button onClick={()=>addCount()} style={{fontSize:"3rem"}}>Add count</button>
        <button onClick={()=>getCount()} style={{fontSize:"3rem"}}>Get count</button>
      </div>  
    </div>
  );
}

export default MyComponent;