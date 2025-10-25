import { Console, MissionUtils } from "@woowacourse/mission-utils";

//자동차 움직이기
const raceCars = (tries, cars) => {
  for (let i = 0; i < tries; i++) {
    moveCars(cars);
    printRaceState(cars);
  }
};
export const moveCars = (cars) => {
  cars.forEach((car) => {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) car.count++;
  });
};
export const printRaceState = (cars) => {
  cars.forEach(({ name, count }) => {
    Console.print(`${name} : ${"-".repeat(count)}`);
  });
  Console.print("");
};
export default raceCars;
