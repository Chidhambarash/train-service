import intialState from "./intialState";
const inputReducer = (state=intialState, action)=>{
    switch(action.type) {
        case 'UPDATE_BOARDING': 
           return {...state,boardingSpot:action.data};
       case 'UPDATE_DESTINATION':
        return {...state,destinationSpot:action.data};
        case 'UPDATE_TRAIN':
        return {...state,trainName:action.data};
       default:
            return intialState;
    }
}

export default inputReducer;