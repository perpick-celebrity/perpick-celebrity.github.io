<script lang="ts">
  import { beforeUpdate } from "svelte";
  import { users } from "@src/stores";
  import API from "@src/api/perfumes";

  import Celebrity from "@src/components/Celebrity/Celebrity.svelte";
  import RecommendedPerfumes from "@src/components/Perfumes/RecommendedPerfumes.svelte";
  import IntersectionObserver from "@src/components/Image/IntersectionObserver.svelte";
  import type { PerfumesWithCelebrity } from "@src/models";
  import { getCelebruty } from "@src/utils/PerfumeCalc/PerfumeCalc";
  import type { AxiosResponse } from "axios";

  let changed = false;
  let perfumes: AxiosResponse<PerfumesWithCelebrity> | undefined;

  beforeUpdate(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    changed = false;
  });

  users.subscribe(async (users) => {
    if (users.select.value) {
      let celebrity = getCelebruty(users.select.value);
      if (celebrity) {
        changed = true;
        perfumes = await getPerfumes({ match: celebrity.keywords.map((k) => k.keyword) });
      }
    }
  });

  const getPerfumes = async ({ match }: { match: string[] }) => {
    return API.getPerfumesWithCelebrity({
      select: $users.select,
      match,
    });
  };
</script>

{#if changed}
  <div class="w-full h-full fixed block top-0 left-0 bg-pp-50 opacity-75 z-50">
    <div class="h-full flex justify-center pb-4 flex-col items-center">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="#FFC2D8" />
      </svg>
    </div>
  </div>
{:else if perfumes}
  <div class="pt-4 bg-white mb-4 shadow-lg m-4 rounded">
    <div style={`background-color: ${"title.bg_color"}`} class="p-2 title_shadow">
      <Celebrity />
    </div>
    <RecommendedPerfumes perfumes={perfumes.data} />
  </div>
{/if}

<style>
  .title_shadow {
    -moz-box-shadow: inset 0 0 40px #f2f2f2;
    -webkit-box-shadow: inset 0 0 40px #f2f2f2;
    box-shadow: inset 0 0 40px #f2f2f2;
  }
  svg {
    animation: 2s linear infinite svg-animation;
    max-width: 100px;
  }

  @keyframes svg-animation {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  circle {
    animation: 1.4s ease-in-out infinite both circle-animation;
    display: block;
    fill: transparent;
    stroke-linecap: round;
    stroke-dasharray: 283;
    stroke-dashoffset: 280;
    stroke-width: 4px;
    transform-origin: 50% 50%;
  }

  @keyframes circle-animation {
    0%,
    25% {
      stroke-dashoffset: 280;
      transform: rotate(0);
    }

    50%,
    75% {
      stroke-dashoffset: 75;
      transform: rotate(45deg);
    }

    100% {
      stroke-dashoffset: 280;
      transform: rotate(360deg);
    }
  }
</style>
