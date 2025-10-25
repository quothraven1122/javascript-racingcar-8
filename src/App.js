import { Console } from "@woowacourse/mission-utils";

//입력 받는 함수
const getInput = async () => {
  const carsInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const splitCarsInput = carsInput.split(",");
  checkCarsInput(splitCarsInput);

  const triesInput = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  checkTriesInput(triesInput);

  //시도횟수, {name: i, count:0 }의 array 리턴
  return [triesInput, splitCarsInput.map((i) => ({ name: i, count: 0 }))];
};

//입력 에러 처리하는 함수
const checkCarsInput = (splitInput) => {
  if (splitInput.length < 2)
    throw new Error("[ERROR] Input Error: Need At Least Two Cars to Race");
  if (splitInput.some((car) => car === ""))
    throw new Error("[ERROR] Input Error: Empty Name");
};
const checkTriesInput = (triesInput) => {
  if (triesInput === "") throw new Error("[ERROR] Input Error: Empty Tries");
  if (isNaN(triesInput))
    throw new Error("[ERROR] Input Error: Wrong Input for Tries");
};

class App {
  async run() {
    const [tries, cars] = await getInput();
  }
}

export default App;
