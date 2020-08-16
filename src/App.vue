<template>
  <div id="app">
    <Logo></Logo>
    <div id="nav">
      <!--      <router-link to="/">Home</router-link>-->
      |
      <!--      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>
<style>
.color {
}
</style>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Logo from "@/components/Logo";

@Component({
  components: {
    Logo
  }
})
export default class App extends Vue {

}
</script>
