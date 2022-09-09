import { SolarCar } from "../src/SolarCar";

describe("Racer and SolarCar", () => {
    test("The team property is set from the constructor parameter.", () => {
              const newRacer = new SolarCar("Flash");
      expect(newRacer.team).toEqual("Flash");
    });
    test("Speed starts at 0", () => {
        const newRacer = new SolarCar("Flash");
expect(newRacer.speed).toEqual(0);
});
test("Speed is 1 after calling accelerate", () => {
    const newRacer = new SolarCar("Flash");
    newRacer.accelerate();
expect(newRacer.speed).toEqual(1);
});
test("Speed is 2 after calling accelerate twice", () => {
    const newRacer = new SolarCar("Flash");
    newRacer.accelerate();
    newRacer.accelerate();
expect(newRacer.speed).toEqual(2);
});
test("isFuelEmpty returns false", () => {
    const newRacer = new SolarCar("Flase");
expect(newRacer.isFuelEmpty()).toEqual(false);
});
});