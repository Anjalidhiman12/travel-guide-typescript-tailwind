import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/constants";
import {getStateById} from "./state-actions"

export type State={
    state:any,
    status:string,
    message:string|undefined,

}
const initialState:State={
    state:null,
    status:STATUS.IDLE,
    message:undefined,

}



const getStateByIdAsync=createAsyncThunk('state/getPlaceByStateId',async(params:{
    stateId:string
})=>{
    try{
    const response: any = await getStateById(params);
    return response
    }
    catch(error:any){
      error=error.response.data;   
      throw error;

     
    }
})

export const stateSlice = createSlice({
    name:'state',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getStateByIdAsync.pending,(state)=>{
            state.status=STATUS.LOADING
        })
        .addCase(getStateByIdAsync.fulfilled,(state,action)=>{
            state.status=STATUS.SUCCESS,
            state.state=action.payload
        })
        .addCase(getStateByIdAsync.rejected,(state,action)=>{
            state.status=STATUS.FAILED,
            state.message=action.error.message
        })

    }



})

export default stateSlice.reducer



