import axios from 'axios';
import { env } from "../config/environment";
import {getStateBaseUrl } from "../config/state-api"


export async function  getAllStates():Promise<{data:any}> {

    try{

        const stateBaseUrl = getStateBaseUrl(env);
        const getAllStatesUrl=stateBaseUrl;

             const response=  await axios.get(getAllStatesUrl);

             return response.data;

       


    }
    catch(error){
        throw error;
    }
    
}

export async function  getStateById(params:{stateId:string}):Promise<{data:any}> {

    try{

        const stateBaseUrl = getStateBaseUrl(env);
        const getStateById=stateBaseUrl+params.stateId;

             const response=  await axios.get(getStateById);

             return response.data;

       


    }
    catch(error){
        throw error;
    }
    
}