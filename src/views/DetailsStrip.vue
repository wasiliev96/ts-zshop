<template>
  <div class="details-strip h-full">
    <!--    <div class="text-center uneccessary">-->
    <!--      <h1>Details View: {{ this.$route.name }}</h1>-->
    <!--      <h2>id:{{ this.$route.params.id }}</h2>-->
    <!--    </div>-->
    <!--    <agile :infinite="false">-->
    <!--    </agile>-->
    <div class="border-2 card h-full" v-for="item in this.$store.state.saleItems"
         :id="item.id">
      <agile class="horizontal-strip h-full" centerMode>
        <div class="image-card h-full" v-for="image in item.gallery">
          <img
              :src="'http://localhost:1337' + image.url" :alt="image.alternativeText">
        </div>
      </agile>
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
  private scrollYPoint = window.scrollY;
  private currentScreenID: number = 1;

  created() {
    console.log('scroll:')
    console.log(this.scrollYPoint);
  }

};
</script>

<style scoped lang="scss">
.card {
  width: 100vw;

  .image-card {
    width:  100vw;
    height: calc(100vh - 50px);
  }
}
</style>
