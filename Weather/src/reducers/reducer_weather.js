import { FETCH_WEATHER } from "../actions";

export default function(state =[], action){
    // console.log('Action recieved ', action);
    switch (action.type){
        case FETCH_WEATHER:
        return [ action.payload.data, ...state ];
        //same as return state.concat([ action.payload.data])
        // concate does not mantipulate the existing array.
    }
    return state;
}