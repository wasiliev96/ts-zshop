<template>
  <div>

    <router-link v-if="!item.isSold" :to="{name:'DetailsStrip', params:{id:item.id}}" class="relative flex"
                 :id="item.id">
      <img :src="'http://localhost:1337' + item.gallery[0].url" :alt="item.gallery[0].alternativeText">
    </router-link>
    <div class="relative flex" v-else>
      <img :src="'http://localhost:1337' + item.gallery[0].url" :alt="item.gallery[0].alternativeText">
      <div
          class="absolute top-0 left-0 w-full h-full opacity-75 card-overlay bg-main">
      </div>
      <span  class="absolute text-2xl font-bold text-white uppercase sold-text">Продано</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop()
  item!: object;

  created() {
  }
};
</script>

<style scoped lang="scss">
.title {
  text-shadow: -1px .3em 20px var(--color_main);

}

.card {
  .lead-img { width: 100%; }

  .gallery {
    height:           90%;
    max-width:        900px;
    scroll-snap-type: x mandatory;

    img {
      object-fit:        cover;
      object-position:   center;
      scroll-snap-align: start;
    }
  }
}

.sold-text {
  top:       50%;
  left:      50%;
  transform: translate(-50%, -50%);
}
</style>
