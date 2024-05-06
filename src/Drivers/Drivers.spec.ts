import {status} from './Drivers'

describe("Drivers", () => {
  test("returns too young if given an age less than 16", () => {
    expect(status(15)).toEqual("too young")
  });
  test("returns too old if given an age greater than 85", () => {
    expect(status(90)).toEqual("too old")
  });
  test("returns eligible if given an age between 16 and 85 inclusive", () => {
    expect(status(30)).toEqual("eligible")
  });
});
