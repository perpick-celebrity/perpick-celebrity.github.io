import {typingInterval} from "./typingInterval.js";
const hideCursorOnAnimationEnd = (element) => element.classList.replace("typing", "finished-typing");
const writeEffect = async ({currentNode, text}, options) => {
  currentNode.classList.add("typing");
  for (let index = 0; index <= text.length; index++) {
    const char = text[index];
    char === "<" && (index = text.indexOf(">", index));
    currentNode.innerHTML = text.slice(0, index);
    await typingInterval(options.interval);
  }
  hideCursorOnAnimationEnd(currentNode);
};
export {writeEffect};
