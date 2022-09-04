<template>
  <header v-if="windowSize > 980">
    <HeaderTopContent />
      <div class="content">
      <HeaderInfo/>
      <SelecctMenu/>
      </div>
  </header>
  <header v-else>
    <HeaderMobile />
  </header>
</template>

<script>
import HeaderInfo from './HeaderInfo.vue'
import HeaderTopContent from './HeaderTopContent.vue'
import SelecctMenu from '../SelectMenu/selecctMenu.vue'
import HeaderMobile from '@/components/Standart/Header/HeaderMobile.vue'

export default {
  name: 'HeaderMain',
  data () {
    return {
      windowSize: 0
    }
  },
  mounted () {
    this.windowSize = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowSize = window.innerWidth
    })
  },
  components: { HeaderInfo, HeaderTopContent, SelecctMenu, HeaderMobile }
}
</script>
