<template>
  <header class="sticky top-0 z-50 w-full h-20 bg-white">
    <nav class="flex justify-end h-full nav">
      <Logo class="absolute bottom-0 left-0 logo" @click="activeMenuIndex=0"></Logo>
      <ul class="flex items-center justify-center pr-2 nav-main-list">
        <li v-for="(link, index) in navLinks" v-bind:key="index" @click="activeMenuIndex = index"
            :class="{'active':activeMenuIndex===index}"
            class="block h-full px-2 font-bold uppercase color-main">
          <router-link class="flex items-center h-full"
                       :to="{name: link.component}"><span v-text="link.title"></span></router-link>
        </li>
        <li class="px-2 text-xs font-bold uppercase color-main">
          <router-link to="/reviews" class="flex flex-col items-center justify-center h-full">
            <svg class="mx-auto" width="18" height="15" viewBox="0 0 18 15" fill="var(--color_main)"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M17.4386 2.11675C16.6848 0.687671 14.5132 -0.481574 11.9872 0.199186C10.7801 0.521243 9.72702 1.2119 8.99988 2.15832C8.27273 1.2119 7.2196 0.521243 6.01256 0.199186C3.48094 -0.471181 1.315 0.687671 0.561134 2.11675C-0.496521 4.11746 -0.0577064 6.36761 1.86633 8.80483C3.37405 10.712 5.52874 12.6452 8.6567 14.8901C8.75555 14.9613 8.87732 15 9.00269 15C9.12805 15 9.24982 14.9613 9.34868 14.8901C12.471 12.6504 14.6313 10.7328 16.139 8.80483C18.0575 6.36761 18.4963 4.11746 17.4386 2.11675Z"/>
            </svg>
            Отзывы
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="header-shadow"></div>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Logo from "@/components/Logo.vue";

@Component({
  components: {
    'Logo': Logo
  }
})
export default class Header extends Vue {
  private readonly navLinks: Array<object> = [
    {
      title: 'Новинки',
      component: 'New'
    },
    {
      title: 'Скидки',
      component: 'Sale'
    }
  ]
  private activeMenuIndex: any = null;
}
</script>

<style scoped>
header {
  height: 90px;
}

.logo {
  transform  : translate(30%, 0%);
  box-shadow : -1px 18px 15px hsla(243, 100%, 78%, .4);
}

.header-shadow {
  width      : 100%;
  height     : 20px;
  position   : absolute;
  bottom     : 0;
  left       : 0;
  transform  : translateY(100%);
  background : linear-gradient(180deg, rgba(150, 145, 255, 0.3) 0%, rgba(150, 145, 255, 0) 100%);
}
</style>
