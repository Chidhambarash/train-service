export const updateBoarding = (board) =>{
    return {
        type: 'UPDATE_BOARDING',
        data: board
    }
}

export const updateDestination = (destination) => {
    return {
        type: 'UPDATE_DESTINATION',
        data: destination
    }
}

export const updateTrainName = (train) => {
    return {
        type: 'UPDATE_TRAIN',
        data: train
    }
}