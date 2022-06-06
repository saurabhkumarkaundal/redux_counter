import * as Action_types from "./Action_types"

export const incValue=()=>{
    return{
        type: Action_types.Incr
    }
}
export const denValue=()=>{
    return{
        type: Action_types.Decr
    }
}