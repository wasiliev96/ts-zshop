<template>
  <div id="app" class="app">
    <Header></Header>
    <router-view class="mx-0 mt-3 sm:mx-5 page z-0"/>
    <NavigationBar></NavigationBar>
  </div>
</template>
<style scoped lang="scss">
.app {
  display:        flex;
  flex-direction: column;
}

.page {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Header from "@/components/Header.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import axios from "axios";

@Component({
  components: {
    'Header': Header,
    'NavigationBar': NavigationBar
  }
})
export default class App extends Vue {
  private itemsList: object = {};

  created() {
    this.$store.dispatch('loadData')
    console.log('store:')
    console.table(this.$store.state.saleItems);

    axios.get('http://localhost:1337/sale-items')
        .then(response => {
          this.itemsList = response.data;
          console.log(this.itemsList);
        })
  }
}
</script>
