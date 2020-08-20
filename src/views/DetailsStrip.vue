<template>
  <div class="details-strip">
    <!--    <div class="text-center uneccessary">-->
    <!--      <h1>Details View: {{ this.$route.name }}</h1>-->
    <!--      <h2>id:{{ this.$route.params.id }}</h2>-->
    <!--    </div>-->

    <div class="border-2" v-for="item in this.$store.state.saleItems"
         :id="item.id">
      <div class="horizontal-strip">
        <div class="image-card" v-for="image in item.gallery">
          <img
              :src="'http://localhost:1337' + image.url" :alt="image.alternativeText">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class extends Vue {
  private scrollYPoint = window.scrollY;
  private currentScreenID: number = 1;

  created() {
    console.log('scroll:')
    console.log(this.scrollYPoint);
  }

};
</script>

<style scoped lang="scss">

</style>
