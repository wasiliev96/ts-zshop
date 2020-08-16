<template>
  <svg :width="width" :height="height" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title
        :id="iconName"
        lang="en"
    >{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot/>
    </g>
  </svg>

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class IconBase extends Vue {
  @Prop({default: 'ZIcon'})
  iconName?: string
  @Prop({default: "#000000"})
  iconColor?: string
  @Prop({default: 27})
  width?: number
  @Prop({default: 22})
  height?: number
}
</script>

<style scoped>

</style>
