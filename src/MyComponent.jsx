import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MyComponent() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash)
  const count = useSelector(state => state.count)
  console.log(count);

  const addCount =() =>{
    dispatch({type:"ADD_COUNT", countload: 1})
  }

  const getCount =() =>{
    dispatch({type:"GET_COUNT", countload: 1})
  }
 
  return (
    <div>
      <div style={{fontSize:"3rem"}}>{cash}</div>
      <div style={{display:"flex"}}>
        <button onClick={()=>addCount()} style={{fontSize:"3rem"}}>Add count</button>
        <button onClick={()=>getCount()} style={{fontSize:"3rem"}}>Get count</button>
      </div>  
    </div>
  );
}

export default MyComponent;