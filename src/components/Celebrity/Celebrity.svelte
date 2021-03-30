<script lang="ts">
  import { users } from "@src/stores";
  import { getCelebruty } from "@src/utils/PerfumeCalc/PerfumeCalc";
  import { beforeUpdate } from "svelte";
  import IntersectionObserver from "../Image/IntersectionObserver.svelte";
  import Image from "../Image/Image.svelte";

  let celebrity = getCelebruty($users.select.value);

  beforeUpdate(() => {
    celebrity = getCelebruty($users.select.value);
  });
</script>

{#if celebrity}
  <div class="m-4 divide-y-2 divide-gray-200 tracking-widest init_anim">
    <h1 class="m-2 text-2xl text-pink-400">{celebrity.idol_name}</h1>
    <IntersectionObserver once={true} let:intersecting>
      {#if intersecting}
        <Image src={celebrity.img} alt={celebrity.idol_name} />
      {/if}
    </IntersectionObserver>
    <div class="my-4">
      <div class="my-4">
        <p>소속사: {celebrity.agency}</p>
        {#if celebrity.idol_group}
          <span>`그룹: ${celebrity.idol_group}`</span>
        {/if}
        {#each celebrity.keywords as keyword}
          <p>{keyword.keyword}</p>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  img {
  }
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  p {
    font-family: RIDIBatang;
    word-break: keep-all;
  }
  .init_anim {
    animation-name: init;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  @keyframes init {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
</style>
