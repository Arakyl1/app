<template>
  <div class="h0">
        <HomeSlader/>
        <div class="spacer--100px"></div>
        <SladerProduct
          :title="this.infoName[0]"
          :categor ="this.infoCategor[0]"/>
        <div class="spacer--100px"></div>
        <SladerProduct
          :title="this.infoName[1]"
          :categor ="this.infoCategor[1]"/>
        <div class="spacer--100px"></div>
        <InfoForcatalog/>
        <div class="spacer--100px"></div>
        <SladerProduct
          :title="this.infoName[2]"
          :categor ="this.infoCategor[2]"/>
        <div class="spacer--100px"></div>
        <AdditionalInfo :title="'Наши преимущества'"/>
        <div class="spacer--100px"></div>
  </div>
</template>

<script>
import SladerProduct from '@/components/BasicComponents/SladerProduct/SladerProduct.vue'
import HomeSlader from '@/components//Home/HomeSlader.vue'
import InfoForcatalog from '@/components/Other/InfoForcatalog.vue'
import AdditionalInfo from '@/components/Other/AdditionalInfo.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      infoName: ['Товары месяца', 'Новинки', 'Акции недели'],
      infoCategor: ['top', 'news', 'sale']
    }
  },
  components: { HomeSlader, InfoForcatalog, AdditionalInfo, SladerProduct }
}
</script>
