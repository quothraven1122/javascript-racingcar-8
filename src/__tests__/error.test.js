import { checkCarsInput, checkTriesInput } from "../utils/error.js";

//checkCarsInput을 위한 test suite
describe("checkCarsInput", () => {
  //Test case 1: Valid path
  test("인풋이 적절하면 에러가 나지 않는다.", () => {
    const validInput = ["pobi", "woni", "jun"];
    expect(() => checkCarsInput(validInput)).not.toThrow();
  });

  //Test case 2: Error path (차가 둘보다 적을 경우)
  test("차가 둘보다 적게 제공되면 에러를 던진다.", () => {
    const singleCar = ["pobi"];
    expect(() => checkCarsInput(singleCar)).toThrow(
      "[ERROR] Input Error: Need At Least Two Cars to Race"
    );
  });

  //Test case 3: Error path (차 이름이 공백일 경우)
  test("차 이름 중 공백이 있을 경우 에러를 던진다.", () => {
    const emptyName = ["pobi", "", "jun"];
    expect(() => checkCarsInput(emptyName)).toThrow(
      "[ERROR] Input Error: Empty Name"
    );
  });
});

//checkTriesInput을 위한 test suite
describe("checkTriesInput", () => {
  //Test case 1: Valid path
  test("인풋이 적절하면 에러가 나지 않는다.", () => {
    const validTries = 5;
    expect(() => checkTriesInput(validTries)).not.toThrow();
  });

  //Test case 2: Error path (tries이 공백일 경우)
  test("시도 횟수가 공백일 경우 에러를 던진다.", () => {
    const tries = "";
    expect(() => checkTriesInput(tries)).toThrow(
      "[ERROR] Input Error: Empty Tries"
    );
  });

  //Test case 3: Error path (tries이 숫자가 아닐 경우)
  test("시도 횟수가 숫자가 아닐 경우 에러를 던진다.", () => {
    const tries = "abc";
    expect(() => checkTriesInput(tries)).toThrow(
      "[ERROR] Input Error: Wrong Input for Tries"
    );
  });
});
