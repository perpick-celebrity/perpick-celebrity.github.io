import {sleep} from "./sleep.js";
import {rng} from "./rng.js";
const typingInterval = async (interval) => sleep(Array.isArray(interval) ? interval[rng(0, interval.length)] : interval);
export {typingInterval};
