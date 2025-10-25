import { Console } from "@woowacourse/mission-utils";
import printWinners from "../utils/output.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: { print: jest.fn() },
}));

describe("printWinners", () => {
  //Test 1. 우승자가 한 명 있을 경우
  test("우승자 한 명만 출력한다.", () => {
    const cars = [
      { name: "pobi", count: 5 },
      { name: "woni", count: 2 },
      { name: "jun", count: 3 },
    ];
    printWinners(cars);
    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : pobi");
  });

  //Test 2. 우승자가 두 명 있을 경우
  test("우승자 두 명을 쉼표로 구분해 출력한다.", () => {
    const cars = [
      { name: "pobi", count: 5 },
      { name: "woni", count: 5 },
      { name: "jun", count: 3 },
    ];
    printWinners(cars);
    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : pobi, woni");
  });

  //Test 3. 우승자가 세 명 있을 경우
  test("우승자 세 명을 쉼표로 구분해 출력한다.", () => {
    const cars = [
      { name: "pobi", count: 5 },
      { name: "woni", count: 5 },
      { name: "jun", count: 5 },
    ];
    printWinners(cars);
    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : pobi, woni, jun");
  });
});
