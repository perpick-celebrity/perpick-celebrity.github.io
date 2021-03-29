import {getElements} from "../helpers/getElements.js";
const typewriter = async (node, options) => {
  const {mode} = options.loop || options.loopRandom ? await import("./loopTypewriter.js") : await import("./typewriter.js");
  const elements = getElements(node);
  if (options.delay > 0) {
    const {sleep} = await import("../helpers/sleep.js");
    await sleep(options.delay);
    node.classList.remove("delay");
  }
  void mode(elements, options);
};
export {typewriter};
