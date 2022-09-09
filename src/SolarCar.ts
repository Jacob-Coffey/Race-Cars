import { Racer } from "./Racer"
export class SolarCar implements Racer{
    team: string;
    speed: number = 0;

    constructor(team: string){
        this.team = team
    };

    accelerate(): number{
        return this.speed++;
    };
    isFuelEmpty(): boolean{
        return false;
    };
}