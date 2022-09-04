<template>
    <p v-if="sellInfo" class="ot7__price">{{ (Math.floor((priceInfo)*0.9)) + currency}} </p>
    <p :class="{ '--gray': sellInfo}" class="ot7__price">{{ this.priceText }}</p>
</template>
<script>
export default {
  name: 'ProductPriceInfo',
  props: {
    sellInfo: Boolean,
    priceInfo: Number
  },
  data () {
    return {
      currency: ' ₽'
    }
  },
  computed: {
    priceText () {
      return this.sellInfo ? this.priceInfo : this.priceInfo + this.currency
    }
  }
}
</script>
