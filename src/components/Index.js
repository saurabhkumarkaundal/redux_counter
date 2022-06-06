import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { denValue, incValue } from "../redux/Action-creater";

function Index(){
    const myState=useSelector(state=>state.ourState.count)
    console.log(myState)
    const dispatch=useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(incValue())}> increment</button><br/>
            <h3>{myState}</h3>
            <button onClick={()=>dispatch(denValue())}>decerement</button>
        </div>
    )
}
export default Index;