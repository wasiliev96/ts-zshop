<template>
  <div class="details-strip">
    <h1>Details View: {{ this.$route.name }}</h1>
    <h2>id:{{ this.$route.params.id }}</h2>

    <div class="relative w-full h-full overflow-hidden card">

      <span class="absolute top-0 left-0 z-50 text-2xl cursor-pointer arrow color-main title">
        <svg width="57" height="36" viewBox="0 0 57 36" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path
                    d="M11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071L17.6569 19.0711C18.0474 19.4616 18.6805 19.4616 19.0711 19.0711C19.4616 18.6805 19.4616 18.0474 19.0711 17.6569L13.4142 12L19.0711 6.34315C19.4616 5.95262 19.4616 5.31946 19.0711 4.92893C18.6805 4.53841 18.0474 4.53841 17.6569 4.92893L11.2929 11.2929ZM48 11L12 11L12 13L48 13L48 11Z"
                    fill="var(--color_main)"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0.636047" width="57" height="34.7279" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="-1" dy="6"/>
                <feGaussianBlur stdDeviation="5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.588235 0 0 0 0 0.568627 0 0 0 0 1 0 0 0 0.6 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
        </svg>

      </span>
      <span class="absolute top-0 left-0 z-20 w-full text-2xl text-center title_text color-main title"></span>


      <div class="relative flex mx-auto overflow-x-scroll cursor-pointer gallery">

        <div
            class="absolute top-0 left-0 w-full opacity-75 card-overlay bg-main"
        >
        </div>

        <div
            class="absolute top-0 left-0 left-auto flex items-center justify-center w-full text-2xl font-bold text-white uppercase card-overlay_text">
          Продано
        </div>
        <img src='' class="w-full" alt="lead image">
        <img src='' alt="image"
             class="min-w-full mr-2">
      </div>


      <div class="card-label">
        <span class="line-through"></span>
        <p></p>
        <hr>
        <p class="uppercase"></p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";

export default class extends Vue {

  // created() {
  //   axios.get('http://localhost:1337/sale-items')
  //       .then(response => {
  //         this.itemsList = response.data;
  //         console.log(this.itemsList);
  //       })
  // }
};
</script>

<style scoped>

</style>
