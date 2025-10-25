//입력 에러 처리하는 함수
export const checkCarsInput = (splitInput) => {
  if (splitInput.length < 2)
    throw new Error("[ERROR] Input Error: Need At Least Two Cars to Race");
  if (splitInput.some((car) => car === ""))
    throw new Error("[ERROR] Input Error: Empty Name");
};
export const checkTriesInput = (triesInput) => {
  if (triesInput === "") throw new Error("[ERROR] Input Error: Empty Tries");
  if (isNaN(triesInput))
    throw new Error("[ERROR] Input Error: Wrong Input for Tries");
};
