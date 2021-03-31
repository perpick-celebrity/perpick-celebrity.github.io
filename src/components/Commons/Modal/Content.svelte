<script lang="ts">
  import type { Note, Scent, Season, Sillage } from "@src/models/Perfumes";

  import { getContext } from "svelte";
  import PopupLong from "./PopupLong.svelte";

  export let title: string,
    image: string,
    name: string,
    brand: string,
    rows: {
      title: string;
      content: string[];
    }[],
    notes: {
      top: Note[];
      middle: Note[];
      base: Note[];
    },
    scents: Scent[],
    gender: string,
    season: Season,
    sillage: Sillage;

  const { open } = getContext("simple-modal");

  const showPopupLong = () => {
    open(PopupLong, { image, rows, name, brand, notes, scents, gender, season, sillage });
  };
</script>

<section class="text-center">
  <button
    type="button"
    style="transition: all .15s ease"
    class="bg-white text-pink-400 border-b-2 active:bg-pp-600 active:text-white font-bold uppercase text-sm px-2 hover:text-pink-500 transform hover:-translate-y-1 hover:scale-110 hover:border-pink-200 outline-none focus:outline-none"
    on:click={showPopupLong}>{title}</button
  >
</section>

<style>
  * {
    font-family: HangeulNuri-Bold;
    word-break: keep-all;
  }
</style>
