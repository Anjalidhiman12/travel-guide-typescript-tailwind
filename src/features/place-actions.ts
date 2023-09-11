import axios from 'axios';


import { env } from "../config/environment";
import {getPlaceBaseUrl} from "../config/place-api"



export async function  getPlaceByStateId(params:{stateId:string}):Promise<{data:any}> {
    try{

        const placeBaseUrl = getPlaceBaseUrl(env);
        const getPlaceByStateIdUrl=placeBaseUrl+`states/${params.stateId}`;
        const response=await axios.get(getPlaceByStateIdUrl);
        return response.data;



    }
    catch(error){
        throw error
    }
}
