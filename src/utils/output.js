import { Console } from "@woowacourse/mission-utils";

//결과 출력하기
const printWinners = (cars) => {
  const maxCount = Math.max(...cars.map((car) => car.count));
  const winners = cars
    .filter(({ count }) => count == maxCount)
    .map((car) => car.name);

  Console.print(`최종 우승자 : ${winners.join(", ")}`);
};
export default printWinners;
