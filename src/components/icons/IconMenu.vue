<template>
  <ZIcon >
    <path d="M2 10H26"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 2H26"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 18H26"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </ZIcon>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ZIcon from './ZIcon.vue';

@Component({
  components: {
    'ZIcon': ZIcon
  }
})
export default class IconMenu extends Vue {
};
</script>

<style scoped>

</style>
