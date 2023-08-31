import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import placeReducer from "../features/place-reducer";
import stateReducer from "../features/state-reducer";


export function makeStore(){
    return configureStore({
        reducer:{
            place:placeReducer,
            state:stateReducer
        },
        devTools: true,

    })

}

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



export default store;
