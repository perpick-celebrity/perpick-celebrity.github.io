<script lang="ts">
  export let celebrity: { type: string; title: string; summary: string; tags: string[]; bg_color: string } | undefined;
</script>

{#if celebrity}
  <div class="m-4 divide-y-2 divide-gray-200 tracking-widest init_anim">
    <h1 class="m-2 text-2xl text-pink-400">{celebrity.title}</h1>
    <div />
  </div>
{/if}

<style>
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
