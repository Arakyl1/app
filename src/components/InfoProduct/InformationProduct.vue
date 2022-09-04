<template>
<div class="spacer--30px"></div>
    <div v-if="data">
      <ItemBasicInformation v-if="windowSize > 820" :data="data" class="item-information--active"/>
      <ItemMainInfoMobaile v-else :data="data"/>
      <div class="spacer--50px"></div>
      <ItemSpecifications  :data="data.characteristic" class="item-specifications--active"/>
      <div class="spacer--30px"></div>
      <ItemReviews :data="data.reviews" :description="data.description"/>
      <div class="spacer--50px"></div>
      <SladerProduct
        title="С этим товаром покупают"
        categor ="sale"/>
      <div class="spacer--100px"></div>
    </div>
</template>

<script>
import ItemBasicInformation from './ItemBasicInformation.vue'
import ItemSpecifications from './ItemSpecifications.vue'
import ItemReviews from './ItemReviews.vue'
import SladerProduct from '@/components/BasicComponents/SladerProduct/SladerProduct.vue'
import Api from '@/Api/API'
import ItemMainInfoMobaile from './ItemMainInfoMobaile.vue'

export default {
  name: 'InformationProduct',
  data () {
    return {
      data: null,
      windowSize: 0
    }
  },
  created () {
    this.getData()
    this.windowSize = window.innerWidth
    window.addEventListener('resize', () => { this.windowSize = window.innerWidth })
  },
  watch: {
    $route () {
      this.getData()
    }
  },
  methods: {
    getData () {
      this.data = null
      Api.GetItemsInfo(this.$route.params.id).then(res => { this.data = res[0] })
    }
  },
  components: { ItemBasicInformation, ItemSpecifications, ItemReviews, SladerProduct, ItemMainInfoMobaile }
}
</script>
