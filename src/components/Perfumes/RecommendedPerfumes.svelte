<script lang="ts">
  import type { PerfumeSource, PerfumesWithCelebrity } from "@src/models";
  import { users } from "@src/stores";
  import { getCelebruty } from "@src/utils/PerfumeCalc/PerfumeCalc";
  import { beforeUpdate } from "svelte";
  import Perfume from "./Perfume.svelte";

  export let perfumes: PerfumesWithCelebrity;
  let sources: PerfumeSource[] = JSON.parse(perfumes.results.sources);

  let celebrity = getCelebruty($users.select.value);

  beforeUpdate(() => {
    celebrity = getCelebruty($users.select.value);
  });
</script>

<div class="m-4 divide-y-2 divide-gray-200 tracking-widest">
  <h1 class="m-2 text-2xl  text-pink-400">{celebrity ? celebrity.idol_name : "최애"}에게 어울리는 브랜드 향수</h1>
  <div class="flex flex-row justify-center items-end">
    {#each sources as source, i}
      {#if i < 3}
        <Perfume {source} />
      {/if}
    {/each}
  </div>
</div>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
</style>
