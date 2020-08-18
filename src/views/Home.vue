<template>
  <div class="home flex flex-wrap">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <Card></Card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Card from "@/components/Card.vue";

@Component({
  components: {
    // HelloWorld,
    'Card': Card
  },
})
export default class Home extends Vue {
}
</script>
