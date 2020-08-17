<template>
  <header class="w-full">
    <nav class="nav flex justify-between">
      <Logo></Logo>
      <ul class="nav-main-list flex items-center">
        <li v-for="link in navLinks">
          <router-link class="h-auto" :to="{name: link.component}" v-text="link.title"></router-link>
        </li>
        <li>
          <router-link to="/reviews">Отзывы</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Logo from "@/components/Logo.vue";

@Component({
  components: {
    'Logo': Logo
  }
})
export default class Header extends Vue {
  private navLinks: Array<object> = [
    {
      title: 'Новинки',
      component: 'New'
    },
    {
      title: 'Скидки',
      component: 'Sale'
    }
  ]
}
</script>

<style scoped>

</style>
