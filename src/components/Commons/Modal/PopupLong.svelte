<script lang="ts">
  import RoundedImage from "@src/components/Image/RoundedImage.svelte";
  import IntersectionObserver from "@src/components/Image/IntersectionObserver.svelte";
  import type { Note, Scent, Season, Sillage } from "@src/models/Perfumes";
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { keys, values } from "lodash";

  let topNoteEl: any;
  let basNoteEl: any;
  let middleNoteEl: any;
  let scentsEl: any;
  let seasonEl: any;
  let sillageEl: any;

  export let image: string,
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
    name: string,
    brand: string,
    gender: string,
    season: Season,
    sillage: Sillage;

  onMount(() => {
    d3.select(topNoteEl)
      .selectAll("div")
      .data(notes.top.map((t) => t.count).sort((a, b) => b - a))
      .enter()
      .append("div")
      .style("width", function (d: number) {
        const max = notes.top.map((t) => t.count).sort((a, b) => b - a)[0];
        return `${(d / max) * 100}%`;
      })
      .text(function (d: number, idx: number) {
        const t = notes.top[idx];
        return t ? t.title : "top";
      });
    d3.select(middleNoteEl)
      .selectAll("div")
      .data(notes.middle.map((t) => t.count).sort((a, b) => b - a))
      .enter()
      .append("div")
      .style("width", function (d: number) {
        const max = notes.middle.map((t) => t.count).sort((a, b) => b - a)[0];
        return `${(d / max) * 100}%`;
      })
      .text(function (d: number, idx: number) {
        const m = notes.middle[idx];
        return m ? m.title : "middle";
      });
    d3.select(basNoteEl)
      .selectAll("div")
      .data(notes.base.map((t) => t.count).sort((a, b) => b - a))
      .enter()
      .append("div")
      .style("width", function (d: number) {
        const max = notes.base.map((t) => t.count).sort((a, b) => b - a)[0];
        return `${(d / max) * 100}%`;
      })
      .text(function (d: number, idx: number) {
        const b = notes.base[idx];
        return b ? b.title : "base";
      });
    d3.select(scentsEl)
      .selectAll("div")
      .data(scents.map((t) => t.count))
      .enter()
      .append("div")
      .style("width", function (d: number) {
        const max = scents.map((t) => t.count).sort((a, b) => b - a)[0];
        return `${(d / max) * 100}%`;
      })
      .text(function (d: number, idx: number) {
        const s = scents.sort((a, b) => (b.title > a.title ? -1 : 1))[idx];
        return s ? s.title : "scent";
      });
    d3.select(seasonEl)
      .selectAll("div")
      .data(values(season))
      .enter()
      .append("div")
      .style("width", function (d: number) {
        const max = values(season).sort((a, b) => b - a)[0];
        return `${(d / max) * 100}%`;
      })
      .text(function (d: number, idx: number) {
        const s = keys(season)[idx];
        return s ? s : "season";
      });
    d3.select(sillageEl)
      .selectAll("div")
      .data(values(sillage))
      .enter()
      .append("div")
      .style("width", function (d: number) {
        const max = values(sillage).sort((a, b) => b - a)[0];
        return `${(d / max) * 100}%`;
      })
      .text(function (d: number, idx: number) {
        const s = keys(sillage)[idx];
        return s ? s : "sillage";
      });
  });
</script>

<div class="tracking-widest mb-3 text-center">
  <h1 class="text-lg">🌺</h1>
  <div class="w-full p-2 image_wrap my-0 mx-auto">
    <IntersectionObserver once={true} let:intersecting>
      <RoundedImage src={image} alt={"perfume_image"} />
    </IntersectionObserver>
  </div>
  <div class="pt-4">
    <h1 class="text-lg py-1 text-pink-400">{name}</h1>
    <h1 class="text-lg py-0 text-pink-400">{brand}</h1>
  </div>
  <br />
  <div class="text-left">
    {#each rows as row}
      <h2 class="text-lg">{row.title}</h2>
      <p class="text-sm text-purple-600 font-bold ml-4 mt-2">
        {row.content.reduce((p, c) => `${p}, ${c}`)}
      </p>
      <br />
    {/each}
    <h2 class="text-lg">{"선호 성별은?"}</h2>
    <p class="text-sm text-purple-600 font-bold ml-4 mt-2">
      {gender}
    </p>
    <br />
    <h2 class="text-lg">{"향기 계열은?"}</h2>
    <div class="ml-4">
      <div bind:this={scentsEl} class="chart ml-4 mt-2" />
    </div>
    <br />
    <h2 class="text-lg">{"향기 노트는?"}</h2>
    <div class="ml-4">
      <div class="my-2">
        <p>탑 노트</p>
        <div bind:this={topNoteEl} class="chart ml-4 mt-2" />
      </div>
      <div class="my-2">
        <p>미들 노트</p>
        <div bind:this={middleNoteEl} class="chart ml-4 mt-2" />
      </div>
      <div class="my-2">
        <p>베이스 노트</p>
        <div bind:this={basNoteEl} class="chart ml-4 mt-2" />
      </div>
    </div>
    <br />
    <h2 class="text-lg">{"선호 계절은?"}</h2>
    <div class="ml-4">
      <div bind:this={seasonEl} class="chart ml-4 mt-2" />
    </div>
    <br />
    <h2 class="text-lg">{"잔향은?"}</h2>
    <div class="ml-4">
      <div bind:this={sillageEl} class="chart ml-4 mt-2" />
    </div>
    <br />
  </div>
</div>

<style>
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  h2 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  p {
    font-family: RIDIBatang;
    word-break: keep-all;
  }
  .image_wrap {
    min-width: 5rem;
    max-width: 10rem;
  }
  .chart :global(div) {
    font: 10px sans-serif;
    background-color: #bc9fe4;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
  }
</style>
