import {writeEffect} from "../helpers/writeEffect.js";
import {unwriteEffect} from "../helpers/unwriteEffect.js";
import {getRandomElement} from "../helpers/getRandomElement.js";
const loopTypewriter = async ({currentNode, text}, options) => {
  await writeEffect({currentNode, text}, options);
  const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
  const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
  fullyWritten && await unwriteEffect(currentNode, options);
};
const mode = async (elements, options) => {
  while (true) {
    if (options.loop) {
      for (const element of elements)
        await loopTypewriter(element, options);
    } else if (options.loopRandom) {
      const element = getRandomElement(elements);
      await loopTypewriter(element, options);
    }
  }
};
export {mode};
