import {writable} from "../../_snowpack/pkg/svelte/store.js";
import selectors from "../constants/quizzes.json.proxy.js";
const paginaton = writable({
  page: 1,
  perPage: 1,
  max: selectors.length
});
export default paginaton;
