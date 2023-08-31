import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/constants";
import {getPlaceByStateId} from "./place-actions"

export type Place={
    place:any,
    status:string,
    message:string|undefined
}
const initialState:Place={
    place:null,
    status:STATUS.IDLE,
    message:undefined
}

const getPlaceByStateIdAsync=createAsyncThunk('place/getPlaceByStateId',async(params:{
    stateId:string
})=>{
    try{
    const response: any = await getPlaceByStateId(params);
    return response
    }
    catch(error:any){
      error.message=error.response.data;
      throw error
    }
})


export const placeSlice = createSlice({
    name:'place',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder
      .addCase(getPlaceByStateIdAsync.pending,(state)=>{
        state.status=STATUS.LOADING
      })
      .addCase(getPlaceByStateIdAsync.fulfilled,(state,action)=>{
          state.status=STATUS.SUCCESS,
          state.place=action.meta
      })
      .addCase(getPlaceByStateIdAsync.rejected,(state,action)=>{
         state.status=STATUS.FAILED,
         state.message=action.error.message
      })
    }




})

export default placeSlice.reducer