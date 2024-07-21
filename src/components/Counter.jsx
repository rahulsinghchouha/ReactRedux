import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement ,increment} from '../redux/slices/CounterSlice';

const Counter = () => {

    //useSelector is used to get the data from slice
    //for access the value state parameter then counter slice name then data type name
    //jb bhi state fetch krne ki koshish krte hai pahle vo store ke pass jati hai 
    //then vo slice ke pass jati hai 
    const count = useSelector((state)=>state.counter.value);

    //and for call the reducers we use the useDispatch hook
    const dispatch = useDispatch();


  return (
    <div>
        <button onClick={()=>dispatch( increment())}>Increment</button>
        <br/>

       <div>{count}</div>
      
        <br/>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
