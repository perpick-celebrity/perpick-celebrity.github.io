import {rng} from "./rng.js";
let alreadyChoosenTexts = [];
const getRandomElement = (elements) => {
  while (true) {
    const randomIndex = rng(0, elements.length);
    const isTextDifferentFromPrevious = typeof alreadyChoosenTexts === "number" && randomIndex !== alreadyChoosenTexts;
    const isTextFirstTime = Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex);
    if (isTextFirstTime || isTextDifferentFromPrevious) {
      isTextDifferentFromPrevious && (alreadyChoosenTexts = []);
      alreadyChoosenTexts.push(randomIndex);
      const randomText = elements[randomIndex];
      return randomText;
    }
    const restartRandomizationCycle = alreadyChoosenTexts.length === elements.length;
    restartRandomizationCycle && (alreadyChoosenTexts = alreadyChoosenTexts.pop());
  }
};
export {getRandomElement};
