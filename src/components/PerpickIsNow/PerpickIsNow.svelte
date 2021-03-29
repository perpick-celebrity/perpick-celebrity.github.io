<script lang="ts">
  import Typewriter from "@src/components/Typewriter/Typewriter.svelte";
  import KakaoShareBtn from "@src/components/KakaoShareBtn.svelte";

  let isMore = false;

  const handleClickDeferentService = () => {
    window.location.href = "https://perpick.github.io";
  };
</script>

<div class="m-4">
  <div class="flex justify-center items-center space-x-2 mt-2">
    <KakaoShareBtn />
  </div>
  <h1 class="text-2xl pt-3">Perpick은 지금</h1>
  <p
    class="inline-block my-2 text-pink-300 rounded-lg cursor-pointer hover:text-pink-500 text-base"
    on:click={() => {
      isMore = !isMore;
    }}
  >
    {#if !isMore}
      <div class="flex justify-center">
        <svg
          class="animate-bounce w-6 h-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    {:else}
      그만 알아보기
    {/if}
  </p>
</div>
{#if isMore}
  <div class="init_anim">
    <p
      on:click={handleClickDeferentService}
      class={`animate-bounce text-sm mt-4 mx-4 inline-block px-4 py-2 text-gray-700 bg-pb-200 rounded-sm hover:text-purple-600 cursor-pointer`}
    >
      퍼픽의 다른 서비스 보러 가기
    </p>
    <div class="my-2 mx-4 tracking-widest">
      <div class="m-4 more_anim text-center">
        <a href="mailto:support@scentlab.kr" target="_blank" class="text-purple-300hover:text-purple-400 text-3xl"
          >✉️
        </a>
      </div>
      <p>문의: support@scentlab.kr</p>
      <div class="my-2">
        <Typewriter interval={125} delay={500}>
          <p class="inline text-xs">우리는 이 세상에 있는 향수를 모아 인공지능으로 만들고 있어요!</p>
        </Typewriter>
      </div>
      <div class="flex text-center justify-center tracking-widest copyright">
        <span class="m-0">Made by&nbsp;</span>
        <a href="https://github.com/perpick" target="_blank" class="text-purple-300 hover:text-purple-400"
          >@Perpick<img class="new_tab" src="/new_tab.svg" alt="new_tab" /></a
        >
        <span class="m-0">, See source&nbsp;</span>
        <a
          href="https://github.com/perpick/perpick-celebrity.github.io"
          target="_blank"
          class="text-purple-300 hover:text-purple-400"
        >
          GitHub<img class="new_tab" src="/new_tab.svg" alt="new_tab" />
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
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
