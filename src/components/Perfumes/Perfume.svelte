<script lang="ts">
  import type { PerfumeSource } from "@src/models";
  import IntersectionObserver from "@src/components/Image/IntersectionObserver.svelte";
  import Content from "@src/components/Commons/Modal/Content.svelte";
  import Modal from "@src/components/Commons/Modal/Modal.svelte";
  import Image from "@src/components/Image/Image.svelte";

  import density from "@src/constants/density.json";

  export let source: PerfumeSource;
  const densityDesc = density.find((density) => density.type === source.density)?.description;
  console.log(source);
  //   base_main: {title: "MilkAccord", count: 0}
  // base_sub: (2) [{…}, {…}]
  // brand: "Salvatore Ferragamo"
  // density: "EDT"
  // feeling_scents: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // gender: "Feminine"
  // img_url: "https://perpick-perfume-images.s3.ap-northeast-2.amazonaws.com/SalvatoreFerragamo/fd62e31f-5d5c-4e74-a71e-a796f1744e9b.jpg"
  // kor_title: "세뇨리나"
  // launching_year: "2013"
  // middle_main: {title: "RicesteamAccord", count: 0}
  // middle_sub: (2) [{…}, {…}]
  // reviews: (50) ["홍콩여행 때 샀는데 향도 부드럽고 부담감 없이 사용하기 좋아요 햘별로 모으고 있어요", "잔향이 좋아요 ㅎㅎ 정말 여성여성한 느낌? 엄청 강하지도 않고 정말 은은하게 퍼지는 느낌이…프레이 정도만 뿌리는 저도 부담없이 뿌릴 수 있었던 그런 가볍고 무난한 향이었습니당 ㅎㅎ", "시향해보고 구매했었어요. 생각보다 향이 무거운 느낌이 아니라 자주 뿌리고 다녀요! 다른 시리즈도 사용해보고 싶어요. 라벨이라는 향은 조금 더 묵직한 향기라 둘중에 고민했었어요!", "향수에 대해서는 거의 아무것도 모르는 사람이었는데 남자친구이 길가다가 어떤 향을 맡으면 기… 안남고 피자 냄새가 나요ㅜㅜ조금한 통에 넣어서 들고다니면서 수시로 뿌려야할것 같아요!!", "그냥 무난한 향수.발랄한 느낌이 든다!그렇다고 너무 발랄한 느낌은 아니고.무슨 향인지는 모… 막 뿌려달라고ㅋㅋ↵막상 내가 정말로 좋아하는 다른 향수 뿌리면 관심 무 였으면서 ㅠㅠ흑", "남편에게 선물 받은향수↵달달하지만 고급진향입니다!!", "무난하니 여성스러웠던 향수. 한통 다비웠지만 재구매는 안함. 평범한듯 향기롭다.", "냄새도 진짜 좋아요 처음에 뿌릴 때도 좋지만 시간이 지나면 나는 잔향이 너무 좋음. 뿌리고 갔더니 향이 너무 좋다고 어디꺼냐고 친구들이 그랬어요. 근데 지속력이 너무 약해 ㅠㅠ", "달달한 블루베리냄새? 느낌↵통통튀지도 않고 은은하고 좋아요↵시향 추천!!", "미니향수로 구매해서 사용해봤는데 진짜 인생향수↵향 고급지고 우아하고 완전 좋아요↵↵인공적인…파서 안좋아하는데 얘는 향수인데도 전혀 그런게 없음!↵↵단점이 있다면 지속력이 약해요 ㅠ", "아리따움에서 향맡아보고 바로 사버렸던,,,향 굉장히 좋아요!!!가을겨울보단 봄여름에 뿌리기 좋은 향이에요!", "솔직히 세뇨리나 시리즈 중에 얘가 제일 좋움 뿌리기 무난하고 적당히 신비로우며 향기로윤 요조숙녀느낌", "애정하는 향수!!!↵패키징도 넘나 예쁜데 향도 너무 좋아용!! 우먼 오드 퍼퓸이 달달한 향…낌이라면 이건 상큼하고 시원한 느낌!! 갠적으로 사계절 무난하게 쓰기엔 요걸 더 추천!!", "잘 못 뿌리면 강할 수도 있지만 시간이 지날수록 은은한 향입니다. 겨울에 잘 어울리는 향이라고 생각합니다.", "완전 여성여성 하지요 !↵나를.빛나게해주는향수!↵특히 남자친구만날때 더욱 !!!ㅋㅋㅋ", "특별하진않지만 무난하게쓰게좋고 데일리로 딱이다 ..물론 여름ㄴ 절레절레.. 꽃향기가 나서 여성코스프레하기 딱좋지..딱좋아..흐흣..", "향이 어울리는 게 가장 중요한 향수 특히 이거는 시향을 해보고 고르는 게 좋음! 처음엔 오… 내 주의를 맴돔 하지만 지속력...(절레절레) 선물로 받아서 너무 잘 쓰고 있는 향수!", "첫향이 안좋다고 하시는 분들도 있던데.. 난 좋음♡ ㅋㅋ지속력이 강하지만 향이 은은하게 오래가서 좋음♡ 근데..값이 너무 비쌈ㅠㅠ 그거빼고는 솔직히 다좋음!", "남자친구가 좋아함 ↵나한테는 상큼하고 싱그러운 느낌. 샤워코롱 느낌.↵오드뚜왈렛이니 지속력…..↵한번 펌핑할때 백원씩 쓰는 느낌이라 속상하다 흑흑흑↵어쨌든 내 봄여름 향수임 !!!", "뒤로 갈수록 진한 비누향 때문에 손이 잘 안 가는 제품.", "나만 그런건지 모르겠는데 패키지가 랑방 메리미 생각나게 비슷하지않음..?↵여튼 향은 달다구… 꾸미고 나가는 날에 뿌리면 친구들한테 인기짱bb 친구가 어디꺼냐고 물어본 적도 있었음!", "이 향수도 맞아보면 다른 프랜드등에 뒤지질 않는데 문제는 너무 갈리는 호불호와↵다른 브랜드…느낌의 향이랑까↵같은 가격대면 나는 다른 거 쓰기야 겠지만↵↵나름 나쁘지 않은 중타 향수", "패키지만큼 소녀소녀한 향...*///*", "나는 이 향수좋다고 생각했는데 생각보다 남성들이 별로 안좋아한다. 사자마자 동기한테 자랑했…별로라고 남성들이 싫어하는 냄새같다고 했고 남자친구가 특히 엄청나게 싫어해서 안뿌렸었다.", "걍 향수는 취향이라는걸 완전느끼게해준제품. 이거다쓰고 딴걸로갈아탔다가 진짜후회중 ㅠ 이거뿌리면진짜기분좋고 향도넘좋아서 계속킁킁거리면서 맡게되는데ㅠㅠ 돌아가고싶다ㅠ", "정말 인생향수!!!!!↵너무 귀엽지도않고 너무 여성스럽지도않은 딱 중간향.↵시원하면서도 살… 상큼하면서도 선물하기도 좋고 직접사용하기도 좋은 최고의 핫아이템. 잔향이 짧은건...흠", "2년인가 전에 선물받았었는데↵향이 취향이 아니어서 아직도 고이 모셔져있다↵향 변질된 건 아닌지 방금문득 생각남.......↵향은 정말 케바케인걸 알게해준제품!", "제 인생 향수↵선물받아서 쓰게 됬는데 지속력은 긴편은 아니지만 뿌리고 나가면 꼭 무슨 향수… 자주해서 꼭 떨어지지않게 사놓는 제품이에요! 향 너무좋은데 사람들은 잘 모르더라구요ㅠㅠ", "선물 받아서 사용하게 된 향수인데 향이 너무 좋아요~ 조금 강한 느낌이 있긴하지만 꽃 향기라서 어딜가든 부담없이 살짝 사용하기 좋아요~", "사용해봤는데 정말 향이 은은하면서 살링살랑부는 꽃 향이 난다고 해야 할까요? 무겁지도 않고 부드럽고 은은한 꽃 향 덕분에 사랑스러운 이미지를 얻을 수 있었어요☺️", "향이 완전 좋아요~~~ 어느누구도 싫어향이아니라 구매하셔도 후회하지 않을꺼여요", "처음 쿠팡 써보는데↵정말 좋네용~~↵감사합니당 잘왔습니당❗️", "향많이 안남 ㅠㅠㅠㅠ↵그리고 금방 없어짐 ..↵진짜 좋은 향인데↵이건 매장가서 직접 사야될 듯으으으으으", "향이너무 좋아 재구매합니다 은은하고 고급스런 케이스에 향이 더 좋구요.", "백화점보다싸게살수있어서 좋음.↵뚜왈렛치고 다른향수보다 오래감↵잔향이 좋음", "쓰던상품이여서싸게살수잇어서좋앗는뎅ㅠㅠ상품상자에머가묻어서아쉬웟어요ㅠㅠ", "부인님 생일선물로 바치고↵무사히 생일을 넘겼습니다.↵달콤한 향이에요", "향수가 뿌리고나면 잔향도 거의 없는게 이상해요ㅠ", "배송이 정말 삘라서 놀랬어요↵향도 좋구요 따봉", "잘쓰께요", "짝퉁인듯", "조아요 싸게 삿어요 잘 쓸게야", "항상 쓰는 제품입니다. 향 오래가고 좋네용", "향도 좋게 가격도싸 좋아요", "새상품맞나요? 지문같은게 뭍어있던데", "선물용으로 샀는데 아주 좋아요", "넘나도 여성스러운향기", "원래 기존에 쓰는거라 언니 생일선물로 줬는데, 백화점과 동일하고 배송도 총알배송! 굿", "원래 쓰던 향수인데 싸게 잘산거같아요 배송도빠르고 굳", "넘 좋아요"]
  // season: {winter: 14, spring: 86, summer: 57, fall: 26}
  // sillage: {soft: 74, moderate: 147, heavy: 50, enourmous: 46}
  // title: "SIGNORINA"
  // top_main: {title: "Lychee", count: 0}
  // top_sub: (2) [{…}, {…}]
  // type: ""
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
      rows={[
        { title: "브랜드는?", content: [source.brand] },
        { title: "이름은?", content: [source.title] },
        {
          title: "출시된 시기는?",
          content: [
            source.launching_year > "0" && source.launching_month > "0"
              ? `${source.launching_year}년 ${source.launching_month}월`
              : "정보가 부족해요!",
          ],
        },
        { title: "확산력은?", content: [densityDesc ? densityDesc : "정보가 부족해요!"] },
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
        {
          title: "탑 노트는?",
          content:
            source.top_main || source.top_sub.length > 0
              ? [source.top_main.title, ...source.top_sub.map((n) => n.title)]
              : ["정보가 부족해요!"],
        },
        {
          title: "미들 노트는?",
          content:
            source.middle_main || source.middle_sub.length > 0
              ? [source.middle_main.title, ...source.middle_sub.map((n) => n.title)]
              : ["정보가 부족해요!"],
        },
        {
          title: "베이스 노트는?",
          content:
            source.base_main || source.base_sub.length > 0
              ? [source.base_main.title, ...source.base_sub.map((n) => n.title)]
              : ["정보가 부족해요!"],
        },
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
