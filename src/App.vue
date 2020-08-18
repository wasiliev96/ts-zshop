<template>
  <div id="app min-h-full">
    <Header></Header>
    <div id="nav">
      <!--      <router-link to="/">Home</router-link>-->
      <!--      <router-link to="/about">About</router-link>-->
    </div>
    <router-view class="mt-3 mx-5"/>
    <NavigationBar></NavigationBar>
  </div>
</template>
<style>
.color {
}
</style>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Header from "@/components/Header.vue";
import NavigationBar from "@/components/NavigationBar.vue";

@Component({
  components: {
    'Header': Header,
    'NavigationBar': NavigationBar
  }
})
export default class App extends Vue {
created(){
}
}
</script>
