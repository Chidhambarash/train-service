import trainDetails from "../data/trainDetails";
const trainSearch = (startpoint, destinations) => {
    const startTrains = [];
    const trainList = [];
    const trainNames = Object.keys(trainDetails[0])
    for (let x=0; x<trainNames.length;x++){
        const trainExists=trainDetails[0][trainNames[x]].some(trainstop=> trainstop.stop===startpoint);
        if(trainExists){
            startTrains.push(trainNames[x]);
        }
    }
    for(let i=0;i<startTrains.length;i++){
        let train=trainDetails[0][startTrains[i]]
        let temp=0;
        for(let x=0; x<train.length ;x++){
            if(train[x].stop===startpoint){
               temp=1;
            }
            else if(temp===1 && train[x].stop===destinations){
                trainList.push(startTrains[i]);
            }
        
    
        }
    }
    return trainList;
    

}

export default trainSearch;