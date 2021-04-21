<script lang="ts">
  import { onMount } from "svelte";
  import _ from "lodash";
  import { nav, users } from "@src/stores";
  import Result from "@src/pages/Results.svelte";
  import IntersectionObserver from "@src/components/Image/IntersectionObserver.svelte";
  import RoundedEmbed from "@src/components/Image/RoundedEmbed.svelte";
  import MailChimp from "@src/components/MailChimp.svelte";
  import AuthAPI from "@src/api/auth";
  import PerfumesAPI from "@src/api/perfumes";
  import PerpickIsNow from "@src/components/PerpickIsNow/PerpickIsNow.svelte";

  import "@src/styles/TailwindStyles.svelte";
  import Typewriter from "@src/components/Typewriter/Typewriter.svelte";
  import Select from "@src/components/svelte-select";

  import celebrities from "@src/constants/celebrities.json";

  const items = _.uniqBy(
    celebrities
      .sort((a, b) => (a.idol_name > b.idol_name ? -1 : 1))
      .sort((a, b) => (a.idol_group > b.idol_group ? 1 : -1))
      .map((c) => ({
        value: c.idol_name,
        label: c.idol_name,
        group: c.idol_group,
      })),
    "value",
  );

  onMount(() => {
    $users.select = {
      value: "",
      label: "",
      group: "",
    };
    init();
  });

  let total = "324,523";

  const groupBy = (item: { value: string; label: string; group: string }) => item.group;

  const init = async () => {
    await AuthAPI.login();
    const { data = 0 } = await PerfumesAPI.getTotalWitjCelebrity();
    total = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // const handleKeyPress = (evnet: KeyboardEvent) => {
  //   if (evnet.key === "Enter") {
  //     handleLetsPerpick();
  //   }
  // };

  const handleSelect = (event: { detail: { value: string; label: string; group: string } }) => {
    $users.select = event.detail;
  };

  const handleClearSelect = () => {
    console.log("clear");
    $users.select = { value: "", label: "", group: "" };
  };
</script>

<svelte:head>
  <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
</svelte:head>
<div class="w-full max-w-xs wrap ">
  <header class="m-4  cursor-pointer" on:click={() => {}}>
    <IntersectionObserver>
      <RoundedEmbed src="/banner.svg" alt="logo" type="image/svg+xml" />
    </IntersectionObserver>
  </header>
  <section class="divide-y-2 divide-pink-200">
    <main>
      <div class="mx-6 my-4">
     <!--   <Typewriter interval={125} delay={1000}>
          <p class="text-xs font-thin my-1">
            이 서비스를 통해 약 {total}번 추천되었어요!
          </p>
        </Typewriter> -->
        <div class="themedSearch text-left">
          <Select
            {items}
            {groupBy}
            placeholder="당신의 최애를 검색해주세요 🧚"
            on:select={handleSelect}
            on:clear={handleClearSelect}
          />
        </div>
      </div>
      <IntersectionObserver>
        <Result />
      </IntersectionObserver>
    </main>
    <footer class="pb-24">
      {#if $users.select.value}
        <MailChimp />
      {/if}
      <PerpickIsNow />
    </footer>
  </section>
</div>

<style>
  .wrap {
    min-width: 270px;
    max-width: 420px;
    margin: 0 auto;
    text-align: center;
  }
  @font-face {
    font-family: "Jal_Onuel";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KOTRA_BOLD-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "RIDIBatang";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "HangeulNuri-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  h1 {
    font-family: KOTRA_BOLD-Bold;
    word-break: keep-all;
  }
  p {
    font-family: HangeulNuri-Bold;
    word-break: keep-all;
  }
  button {
    background-color: #b493e7;
  }
  .more_anim {
    animation-name: madmail;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
  @keyframes madmail {
    0% {
      transform: translateX(-100px) rotate(-360deg);
      opacity: 0;
    }
    50% {
      transform: translateX(0px) rotate(0deg);
      animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
      opacity: 1;
    }
    100% {
      transform: translateY(-25%);
      animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
      transform: translateX(100px) rotate(360deg);
      opacity: 0;
    }
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
  .new_tab {
    display: inline;
    margin-left: 4px;
    margin-right: 4px;
    background: url(nana.png);
    background-image: url(nana.svg);
    background-size: "1";
    width: 8px;
    height: 8px;
  }
  .copyright {
    font-size: xx-small;
  }
  .themedSearch {
    --border: 2px solid rgba(167, 139, 250, 0.4);
    --borderRadius: 8px;
    --placeholderColor: rgba(156, 163, 175, 0.9);
    --borderHoverColor: rgba(167, 139, 250, 0.4);
    --clearSelectHoverColor: rgba(167, 139, 250, 0.4);
    --inputPadding: 0px 8px;
    --inputFontSize: 14px;
  }
</style>
