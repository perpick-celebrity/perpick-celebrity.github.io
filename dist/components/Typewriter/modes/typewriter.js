import {writeEffect} from "../helpers/writeEffect.js";
import {onAnimationEnd} from "../helpers/onAnimationEnd.js";
const cleanChildText = (elements) => elements.forEach((element) => element.currentNode.textContent = "");
const mode = async (elements, options) => {
  if (options.cascade) {
    cleanChildText(elements);
  } else {
    const {getLongestTextElement} = await import("../helpers/getLongestTextElement.js");
    const lastElementToFinish = getLongestTextElement(elements);
    onAnimationEnd(lastElementToFinish, () => options.dispatch("done"));
  }
  for (const element of elements)
    options.cascade ? void await writeEffect(element, options) : void writeEffect(element, options);
  options.cascade && options.dispatch("done");
};
export {mode};
