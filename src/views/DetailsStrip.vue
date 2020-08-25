<template>
  <div class="details-strip">
    <!--    <div class="text-center uneccessary">-->
    <!--      <h1>Details View: {{ this.$route.name }}</h1>-->
    <!--      <h2>id:{{ this.$route.params.id }}</h2>-->
    <!--    </div>-->
    <!--    <agile :infinite="false">-->
    <!--    </agile>-->
    <div class="h-full border-2 card"
         v-for="item in this.$store.state.saleItems"
         v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
         :id="item.id">
      <div class="relative mx-auto card-inner"
      >
        <div class="absolute item-brand z-50 color-main text-2xl" v-text="item.brandname"></div>
        <a @click="$router.go(-1)" class="icon-back absolute z-50 p-5 cursor-pointer">
          <svg width="57" height="36" viewBox="0 0 57 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
              <path
                  d="M11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071L17.6569 19.0711C18.0474 19.4616 18.6805 19.4616 19.0711 19.0711C19.4616 18.6805 19.4616 18.0474 19.0711 17.6569L13.4142 12L19.0711 6.34315C19.4616 5.95262 19.4616 5.31946 19.0711 4.92893C18.6805 4.53841 18.0474 4.53841 17.6569 4.92893L11.2929 11.2929ZM48 11L12 11L12 13L48 13L48 11Z"
                  fill="#9691FF"/>
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
        </a>
        <agile class="h-full horizontal-strip" centerMode
               :navButtons=false
               :dots=false
        >
          <div class="h-full image-card"
               v-for="image in item.gallery">
            <img class="object-cover w-full h-full rounded-lg strip-image"
                 :src="'http://localhost:1337' + image.url" :alt="image.alternativeText">
          </div>
        </agile>
        <div class="absolute bottom-0 left-0 details">
          <div class="flex flex-col items-center p-2 mb-3 details_size">
            <div class="text-xl size-value">{{ item.sizeUK }} UK</div>
            <span class="size_description">размер</span>
          </div>
          <div class="relative flex items-center content-center p-2 sale-description">
            <div class="font-medium state"><span class="border-b-2 border-white">идеальное</span></div>
            <span class="ml-6 text-xl price" v-text="item.price"></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {VueAgile} from 'vue-agile'

@Component({
  components: {
    agile: VueAgile
  }
})
export default class extends Vue {
  private lastYScroll = window.scrollY;
  private intersectionOptions = {
    root: null,
    threshold: [0.75, 0.75] // [0.25, 0.75] if you want a 25% offset!
  } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

  public onWaypoint({el, going, direction}) {
    // going: in, out
    // direction: top, right, bottom, left
    if (going === this.$waypointMap.GOING_IN) {
      // console.log('waypoint going in!')
      console.log(`current card: ${el.id}`)
    }

    if (direction === this.$waypointMap.DIRECTION_TOP) {
      // console.log('waypoint going top!')
    }
  }

  mounted() {
    const elem = document.getElementById(this.$route.params.id);
    elem.scrollIntoView();
  }
}
</script>

<style scoped lang="scss">
.card {
  width:             100%;
  height:            calc(100vh - 90px);
  scroll-snap-align: start;

  &-inner {
    max-width: 600px;
    height:    100%;
  }

  .image-card {
    width:  100vw;
    height: calc(100vh - 90px);
  }
}

.strip-image {
  max-height: 95%;
}

.details-strip {
  height:           calc(100vh - 90px);
  scroll-snap-type: y mandatory;
  overflow-y:       scroll;
}

.details {
  pointer-events: none;
  transform:      translate(0, -10vh);
  color:          var(--color_bg);

  & > div {
    background-color:           var(--color_main);
    border-top-right-radius:    1rem;
    border-bottom-right-radius: 1rem;
  }
}

.sale-description {
  min-height: 90px;
}

.state {
  display:         flex;
  position:        absolute;
  top:             0;
  left:            0;
  width:           100%;
  height:          100%;
  align-items:     center;
  justify-content: end;
  line-height:     1.5em;

  span {
    transform: rotate(-90deg) translateY(-100%);
  }
}

.item-brand {
  left:        50%;
  top:         3%;
  transform:   translateX(-50%);
  text-shadow: -1px 6px 10px var(--color_main);
}

.icon-back {
  left: 5%;
  top:  3%;
  transform: translateY(-18%);
}
</style>
