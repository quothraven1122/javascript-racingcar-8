import raceCars, { moveCars, printRaceState } from "../utils/car.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: { print: jest.fn() },
  MissionUtils: {
    Random: { pickNumberInRange: jest.fn() },
  },
}));

//raceCars를 위한 test suite
describe("raceCars", () => {
  test("runs moveCars and printRaceState correct number of times", () => {
    const cars = [
      { name: "pobi", count: 0 },
      { name: "jun", count: 0 },
    ];

    // 랜덤 숫자 뽑기 - 5 뽑았다고 치기
    MissionUtils.Random.pickNumberInRange.mockReturnValue(5); // always increment

    raceCars(2, cars); // 2 tries

    // 2번 시도했으니 각 차는 count = 2
    expect(cars[0].count).toBe(2);
    expect(cars[1].count).toBe(2);

    // 차 2대 + 1 empty line = 3 Console.print calls per try인데 2번 시도하니
    expect(Console.print).toHaveBeenCalledTimes(3 * 2);
  });
});

//moveCars를 위한 test suite
describe("moveCars", () => {
  test("increments count if random >= 4", () => {
    const cars = [
      { name: "pobi", count: 0 },
      { name: "jun", count: 0 },
    ];

    // 랜덤 숫자 뽑기 - 4랑 3 뽑았다고 치기
    MissionUtils.Random.pickNumberInRange
      .mockReturnValueOnce(4) // should increment
      .mockReturnValueOnce(3); // should NOT increment

    moveCars(cars);

    expect(cars[0].count).toBe(1); // incremented
    expect(cars[1].count).toBe(0); // not incremented
  });
});

//printRaceState을 위한 test suite
describe("printRaceState", () => {
  test("prints cars' names and '-' repeated count times, plus an empty line", () => {
    const cars = [
      { name: "pobi", count: 2 },
      { name: "jun", count: 3 },
    ];

    printRaceState(cars);

    expect(Console.print).toHaveBeenCalledWith("pobi : --");
    expect(Console.print).toHaveBeenCalledWith("jun : ---");
    expect(Console.print).toHaveBeenCalledWith("");
  });
});
