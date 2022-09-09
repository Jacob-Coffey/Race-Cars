import { GasCar } from "../src/GasCar";

describe("Racer and GasCar", () => {
    test("The team and fuel properties are set from the constructor parameters", () => {
              const newRacer = new GasCar("Gas", 20);
      expect(newRacer).toEqual({"fuel": 20, "speed": 0, "team": "Gas"});
    });
    test("fuel defaults to 10, when the second constructor parameter is omitted", () => {
        const newRacer = new GasCar("Flash");
expect(newRacer.fuel).toEqual(10);
});
test("The speed property starts at 0", () => {
    const newRacer = new GasCar("Flash");
expect(newRacer.speed).toEqual(0);
});
test("Calling accelerate once brings speed to 2", () => {
    const newRacer = new GasCar("Flash");
    newRacer.accelerate();
expect(newRacer.speed).toEqual(2);
});
test("Calling accelerate twice brings speed to 4", () => {
    const newRacer = new GasCar("Flash");
    newRacer.accelerate();
    newRacer.accelerate();
expect(newRacer.speed).toEqual(4);
});
test("Calling accelerate once reduces fuel by 1", () => {
    const newRacer = new GasCar("Flash");
    newRacer.accelerate();
expect(newRacer.fuel).toEqual(9);
});
test("Calling accelerate twice reduces fuel by 2", () => {
    const newRacer = new GasCar("Flash");
    newRacer.accelerate();
    newRacer.accelerate();
expect(newRacer.fuel).toEqual(8);
});
test("isFuelEmpty returns true when fuel is 0.", () => {
    const newRacer = new GasCar("Flash", 0);
expect(newRacer.isFuelEmpty()).toEqual(true);
});
});