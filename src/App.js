import { Console } from "@woowacourse/mission-utils";
import { getInput, printWinners, raceCars } from "./utils/index.js";

class App {
  async run() {
    const [tries, cars] = await getInput();
    Console.print("");

    Console.print("실행 결과");
    raceCars(tries, cars);
    printWinners(cars);
  }
}

export default App;
