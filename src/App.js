import { Console } from "@woowacourse/mission-utils";

//입력 받는 함수
const getInput = async () => {
  const input = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const tries = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

  //시도횟수, {name: i, count:0 }의 array 리턴
  return [tries, input.split(",").map((i) => ({ name: i, count: 0 }))];
};

class App {
  async run() {
    const [tries, cars] = await getInput();
  }
}

export default App;
