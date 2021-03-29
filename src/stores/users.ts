import { writable } from "svelte/store";

import type { Users } from "@src/models";

const users = writable<Users>({
  select: { value: "", label: "", group: "",},
});

export default users;
