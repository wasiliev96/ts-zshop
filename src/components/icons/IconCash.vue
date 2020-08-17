<template>
  <ZIcon>
    <svg viewBox="0 0 13 24"  xmlns="http://www.w3.org/2000/svg">
      <path d="M6.61493 18.8C3.98428 18.8 2.9499 17.5733 2.80943 16H0C0.153242 18.92 2.24754 20.56 4.69941 21.1067V24H8.53045V21.1333C11.0206 20.64 13 19.1333 13 16.4C13 12.6133 9.89686 11.32 6.99803 10.5333C4.09921 9.74667 3.16699 8.93333 3.16699 7.66667C3.16699 6.21333 4.45678 5.2 6.61493 5.2C8.88801 5.2 9.73084 6.33333 9.80746 8H12.6297C12.5403 5.70667 11.1994 3.6 8.53045 2.92V0H4.69941V2.88C2.222 3.44 0.229862 5.12 0.229862 7.69333C0.229862 10.7733 2.66896 12.3067 6.23183 13.2C9.42436 14 10.0629 15.1733 10.0629 16.4133C10.0629 17.3333 9.43713 18.8 6.61493 18.8V18.8Z"/>
    </svg>

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
export default class IconCash extends Vue {
};
</script>

<style scoped>

</style>
