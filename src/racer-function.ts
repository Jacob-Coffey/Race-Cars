import { Racer } from "./Racer"
export function findRacersWithEmptyFuel (racers: Racer[]): Racer[] {
    const emptyFuelArray: Racer[] = [];
    racers.filter((element) => {
        if(element.isFuelEmpty()){
            return emptyFuelArray.push(element)
        }
        });
    return emptyFuelArray;
}

export function findAverageSpeed (racers: Racer[]): number{
    let sum = 0;
    if(racers.length > 0){
    for(const element of racers){
      sum += element.speed;
    }
    return sum / racers.length;
    }
    else{
        return 0;
    }
}

export function getFasterRacer (racerA: Racer, racerB: Racer){
    if(racerA.speed > racerB.speed){
        return racerA;
    }
    else if(racerB.speed > racerA.speed){
        return racerB;
    }
    else if(racerA.speed === racerB.speed){
        return null;
    }
}