<template>
  <div class="details-strip">
    <!--    <div class="text-center uneccessary">-->
    <!--      <h1>Details View: {{ this.$route.name }}</h1>-->
    <!--      <h2>id:{{ this.$route.params.id }}</h2>-->
    <!--    </div>-->
    <!--    <agile :infinite="false">-->
    <!--    </agile>-->
    <div class=" h-full border-2 card"
         v-for="item in this.$store.state.saleItems"
         v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
         :id="item.id">
      <div class="mx-auto card-inner relative"
      >
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
  overflow-y:       scroll;
}
</style>
