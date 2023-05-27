import trainDetails from "../data/trainDetails"
const  departureTime =(trainName, boarding) => {
       const train= trainDetails[0][trainName];
       for (let x=0;x<train.length;x++){
        if(train[x].stop===boarding){
            return train[x].Depature;
        }

       }
       return "--"
}
export default departureTime;