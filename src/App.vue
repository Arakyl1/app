<template>
<div class="mask bg--black" :class="{ active: this.mask}" @click="hideMask"></div>
  <HeaderMain/>
  <div class="content">
   <PathName v-if="this.$route.name !== 'home'"/>
   <div v-else class="spacer--20px"></div>
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <component :is="Component" />
        </transition>
    </router-view>
  </div>
  <BaseFooter/>
</template>

<script>
import { provide, ref } from 'vue'
import BaseFooter from '@/components/Standart/Footer/Footer.vue'
import HeaderMain from '@/components/Standart/Header/HeaderMain.vue'
import PathName from '@/components/Other/PathName.vue'

export default {
  name: 'HomeView',
  setup () {
    const mask = ref(false)
    const basket = ref([])
    const favoriteItems = ref([])
    provide('mask', mask)
    provide('basket', basket)
    provide('favoriteItems', favoriteItems)
    return {
      mask,
      basket,
      favoriteItems
    }
  },
  methods: {
    hideMask () {
      this.mask = false
    }
  },
  components: { BaseFooter, HeaderMain, PathName }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mask{
  position: fixed;
  height: 0;
  width: 100vw;
  opacity: 0;
  z-index: 800;
  transition-delay: 0.5s;
  &.active{
    transition-delay: 0s;
    opacity: 0.8;
    height: 100vh;
  }
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.2s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
