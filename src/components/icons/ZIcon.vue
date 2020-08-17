<template>
  <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg">
    <g>
      <slot></slot>
    </g>
  </svg>

</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class ZIcon extends Vue {
@Prop({default:"30"})
  size!:string;
};
</script>

<style scoped>

</style>
