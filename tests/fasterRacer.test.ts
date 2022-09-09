import { getFasterRacer } from "../src/racer-function";
import { SolarCar } from "../src/SolarCar";
import { GasCar } from "../src/GasCar";
import { Racer } from "../src/Racer"

describe("Return which racer is faster", () => {
    test("racerA is faster", () => {
             const racerA = new GasCar ("Gas1", 20);
             racerA.accelerate();
             racerA.accelerate();
             racerA.accelerate();
             const racerB = new SolarCar ("Solar");
             racerB.accelerate();
             racerB.accelerate();
             racerB.accelerate();
      expect(getFasterRacer(racerA, racerB)).toEqual(racerA);
    });
    test("racerB is faster", () => {
        const racerB = new GasCar ("Gas1", 20);
        racerB.accelerate();
        racerB.accelerate();
        racerB.accelerate();
        const racerA = new SolarCar ("Solar");
        racerA.accelerate();
        racerA.accelerate();
        racerA.accelerate();
 expect(getFasterRacer(racerA, racerB)).toEqual(racerB);
});
test("same speed", () => {
    const racerB = new GasCar ("Gas1", 20);
    const racerA = new SolarCar ("Solar");
expect(getFasterRacer(racerA, racerB)).toEqual(null);
});
});