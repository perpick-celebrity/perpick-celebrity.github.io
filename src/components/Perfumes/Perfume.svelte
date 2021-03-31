<script lang="ts">
  import type { PerfumeSource } from "@src/models";
  import IntersectionObserver from "@src/components/Image/IntersectionObserver.svelte";
  import Content from "@src/components/Commons/Modal/Content.svelte";
  import Modal from "@src/components/Commons/Modal/Modal.svelte";
  import Image from "@src/components/Image/Image.svelte";

  import density from "@src/constants/density.json";

  export let source: PerfumeSource;
  const densityDesc = density.find((density) => density.type === source.density)?.description;
</script>

<div class="px-2 py-4">
  <div class="p-2 image_wrap">
    <IntersectionObserver once={true} let:intersecting>
      {#if intersecting}
        <Image src={source.img_url} alt={source.title} />
      {/if}
    </IntersectionObserver>
  </div>
  <Modal>
    <Content
      title="자세히 보기"
      image={source.img_url}
      name={source.kor_title}
      brand={source.brand}
      gender={source.gender}
      season={source.season}
      sillage={source.sillage}
      notes={{
        top: source.top_main || source.top_sub.length > 0 ? [source.top_main, ...source.top_sub] : [],
        middle: source.middle_main || source.middle_sub.length > 0 ? [source.middle_main, ...source.middle_sub] : [],
        base: source.base_main || source.base_sub.length > 0 ? [source.base_main, ...source.base_sub] : [],
      }}
      scents={source.feeling_scents.length > 0 ? source.feeling_scents : []}
      rows={[
        {
          title: "출시된 시기는?",
          content: [
            source.launching_year > "0" && source.launching_month > "0"
              ? `${source.launching_year}년 ${source.launching_month}월`
              : "정보가 부족해요!",
          ],
        },
        {
          title: "확산력은?",
          content: [densityDesc ? densityDesc : "정보가 부족해요!"],
        },
        // {
        //   title: "이 향수와 어울리는 성별은?",
        //   content: [
        //     source.gender === "Feminine"
        //       ? "여성"
        //       : source.gender === "Shared"
        //       ? "중성"
        //       : "남성",
        //   ],
        // },
      ]}
    />
  </Modal>
</div>

<style>
  .image_wrap {
    min-width: 3rem;
    max-width: 6rem;
  }
</style>
