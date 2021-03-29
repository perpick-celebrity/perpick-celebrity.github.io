import {writable} from "../../_snowpack/pkg/svelte/store.js";
const nav = writable({
  current: "home"
});
export default nav;
