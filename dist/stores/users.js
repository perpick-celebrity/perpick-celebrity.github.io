import {writable} from "../../_snowpack/pkg/svelte/store.js";
const users = writable({
  select: {value: "", label: "", group: ""}
});
export default users;
