<template>
  <div class="fixed bottom-0 flex justify-center w-full cursor-pointer navigation-bar-wrapper">
    <div class="fixed top-0 left-0 z-10 w-full h-full navigation-bar-overlay" v-if="activeMenuIndex"
         @click="activeMenuIndex=0"></div>
    <div class="z-20 flex flex-col max-w-md w-full rounded-t-lg navigation-bar">
      <div class="flex justify-center navigation-header">
        <button class="flex-grow pt-2 pl-6 pr-5 rounded-tl-lg category focus:outline-none"
                :class="{'active shadow-md':activeMenuIndex===1}"
                @click="activeMenuIndex=1">
          <IconHanger></IconHanger>
        </button>
        <button class="flex-grow px-5 pt-1 category focus:outline-none"
                :class="{'active':activeMenuIndex===2}"
                @click="activeMenuIndex=2">
          <IconHome></IconHome>
        </button>
        <button class="flex-grow w-20 h-20 mx-1 bg-white shadow btn-cta focus:outline-none"
                :class="{'active':activeMenuIndex===5, 'cta_collapsed':activeView!=='New'}"
                @click="activeMenuIndex=5">
          <IconCash></IconCash>
        </button>
        <button class="flex-grow w-20 h-20 mx-1 bg-white shadow btn-cta focus:outline-none"
                :class="{'active':activeMenuIndex===6, 'cta_collapsed':activeView!=='Sale'}"
                @click="activeMenuIndex=6">
          <IconCart></IconCart>
        </button>
        <button class="flex-grow px-5 pt-1 category focus:outline-none"
                :class="{'active':activeMenuIndex===3}"
                @click="activeMenuIndex=3">
          <IconBasket></IconBasket>
        </button>
        <button class="flex-grow pt-4 pl-5 pr-6 rounded-tr-lg category focus:outline-none"
                :class="{'active':activeMenuIndex===4}"
                @click="activeMenuIndex=4">
          <IconMenu></IconMenu>
        </button>
      </div>
      <transition name="fadeHeight">
        <div class="z-20 max-h-full px-6 color-main categories" :class="{'collapsed':activeMenuIndex!==1}">
          <p class="py-5 text-lg uppercase">Весь каталог</p>
          <hr class="color-main">
          <ul class="menuList" style="columns:3;">
            <li class="py-3 pl-0 pr-1 hover:shadow-inner focus:shadow-inner" v-for="item in menulinks"
                @click="activeMenuIndex = null">
              <router-link :to="{name:item.href}" v-text="item.title"></router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import IconHanger from "@/components/icons/IconHanger.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconBasket from "@/components/icons/IconBasket.vue";
import IconMenu from "@/components/icons/IconMenu.vue";
import IconCash from "@/components/icons/IconCash.vue";
import IconCart from "@/components/icons/IconCart.vue";

@Component({
  components: {
    'IconHanger': IconHanger,
    'IconHome': IconHome,
    'IconBasket': IconBasket,
    'IconMenu': IconMenu,
    'IconCash': IconCash,
    'IconCart': IconCart
  }
})
export default class extends Vue {
  private activeMenuIndex = null;

  private readonly menulinks: Array<object> = [
    {
      title: 'Верхняя одежда',
      href: 'Home'
    },
    {
      title: 'Платья',
      href: 'Home'
    },
    {
      title: 'Юбки',
      href: 'Home'
    },
    {
      title: 'Шорты',
      href: 'Home'
    },
    {
      title: 'Штаны',
      href: 'Home'
    },
    {
      title: 'Футболки, майки',
      href: 'Home'
    },
    {
      title: 'Блузы',
      href: 'Home'
    },
    {
      title: 'Кофты',
      href: 'Home'
    },
    {
      title: 'Комбинезоны',
      href: 'Home'
    },
    {
      title: 'Комплекты',
      href: 'Home'
    },
    {
      title: 'Аксессуары',
      href: 'Home'
    },
    {
      title: 'Обувь',
      href: 'Home'
    }

  ];

  get activeView(): any {
    return this.$route.name;
  }
};
</script>

<style scoped lang="scss">
.navigation-bar {
  background-color: var(--color_bg);

  svg {
    fill:   var(--color_main);
    stroke: var(--color_main)
  }
}

.active {
  //background-color: var(--color_main);
  @apply .shadow-inner;

  svg {
    //fill:  var(--color_bg);
    //stroke: var(--color_bg);
  }

}

.categories {
  max-height: calc(100vh - 100px);
  transition: max-height .3s ease-in-out;
}

.collapsed {
  max-height: 0;
}

button svg {
  margin: auto;
}

.btn-cta {
  border-radius: 50%;
  max-width:     80px;
  max-height:    80px;
  transform:     translateY(-45%);
  opacity:       1;
  transition:    all .2s ease-in-out;
  overflow:      hidden;
  @media screen and (max-width: 400px){
    max-width: 60px;
    max-height: 60px;
  }

  svg {
    transform:  scale(1.2);
    fill:       var(--color_accent);
    stroke:     var(--color_accent);
    transition: fill .1s ease-in, stroke .1s ease-in;
  }
}

.cta_collapsed {
  max-width: 0;
  opacity:   0;
  padding:   0;
  margin:    0;
}

</style>
