import trainDetails from "../data/trainDetails";
const priceCalculator = (trainName, boarding, destination) => {
    const train = (trainName==="")?[]:trainDetails[0][trainName];
    let temp = 0;
    let rate=0;
    let distance=0;
    for(let x=0; x<train.length ;x++){
        if(train[x].stop===boarding){

            console.log('hi')
           temp=1;
        }
        else if(temp===1 && train[x].stop!==destination){
            distance=distance+train[x].distance;
        }
        else if(temp!==0){
            distance=distance+train[x].distance;
            rate=distance*1.25
            return rate
        }

    }
    return 0
}
export default priceCalculator;