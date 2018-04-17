export const getRandomIndex = inputList => {
  const maxIndex = inputList.length;
  return Math.floor(Math.random() * maxIndex);
};
