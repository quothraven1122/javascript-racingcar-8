import { Console } from "@woowacourse/mission-utils";
import getInput from "../utils/input.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: { readLineAsync: jest.fn() },
}));

//getInput을 위한 test suite
describe("getInput", () => {
  //Test case 1: 옳은 인풋을 주면 적절한 아웃풋을 리턴하는지 테스트 ([tries, cars])
  test("parse된 인풋과 format된 car objects array를 리턴한다.", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("pobi,woni,jun") // first input
      .mockResolvedValueOnce("5"); // second input

    const [tries, cars] = await getInput();

    expect(tries).toBe("5");
    expect(cars).toEqual([
      { name: "pobi", count: 0 },
      { name: "woni", count: 0 },
      { name: "jun", count: 0 },
    ]);
  });
});
