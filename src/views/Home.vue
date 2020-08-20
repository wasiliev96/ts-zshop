<template>
  <div class="home">
    <Card v-for="item in this.$store.state.saleItems"
          :item="item"></Card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Card from "@/components/Card.vue";

@Component({
  components: {
    'Card': Card
  },
})
export default class Home extends Vue {
  created() {
    console.log(this.$store.state.saleItems);
  }


}
</script>
<style scoped lang="scss">
.home {
  //position: static;
  display:               grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap:              1em;
  z-index:               1;
  @media screen and (min-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
