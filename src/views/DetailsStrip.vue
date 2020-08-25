<template>
  <div class="details-strip">
    <!--    <div class="text-center uneccessary">-->
    <!--      <h1>Details View: {{ this.$route.name }}</h1>-->
    <!--      <h2>id:{{ this.$route.params.id }}</h2>-->
    <!--    </div>-->
    <!--    <agile :infinite="false">-->
    <!--    </agile>-->
    <div class=" h-full border-2 card" v-for="item in this.$store.state.saleItems"
         :id="item.id">
      <div class="mx-auto card-inner relative">
        <agile class="h-full horizontal-strip" centerMode
               :navButtons=false
               :dots=false
        >
          <div class="h-full image-card" v-for="image in item.gallery">
            <img class="object-cover w-full h-full rounded-lg strip-image"
                 :src="'http://localhost:1337' + image.url" :alt="image.alternativeText">
          </div>
        </agile>
        <div class="absolute bottom-0 right-0 details">
          <div class="price" v-text="item.price"></div>
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
  private currentScreenID: number = 1;

  created() {
    window.addEventListener('scroll', this.handleScroll);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public handleScroll(event: any): void {
    // Any code to be executed when the window is scrolled
    let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (currentPosition > this.lastYScroll) {
      // downscroll code

    } else {
      // upscroll code
    }
    this.lastYScroll = currentPosition <= 0 ? 0 : currentPosition; // For Mobile or negative scrolling
  }
}
</script>

<style scoped lang="scss">
.card {
  width:             100vw;
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
  overflow-y: scroll;
}
</style>
