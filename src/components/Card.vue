<template>
  <div class="card">
    <h1>card</h1>
    <img v-for="item in items" :src="item.image" alt="">
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";

export default class Card extends Vue {
  private readonly items: Array<object> = [
    {
      image: './img/item.png'
    }
  ]
};
</script>

<style scoped>

</style>
