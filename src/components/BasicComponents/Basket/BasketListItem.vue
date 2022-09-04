<template>
<li class="bc1-1" v-if="data !== null">
    <img :src="data.img.small" :alt="data.name" class="bc1-1__img">
    <p class="bc1-1__text">{{ data.name }}</p>
    <p class="bc1-1__text-model">{{ data.art }}</p>
    <QuantityPurchasedProduct :dataQuantity="data.quantity" :quantityNumber="quantityNumber" class="bc1-1__form-quantity"/>
    <UiClose class="bc1-1__bt-close--small" :red="true" @click="remoneAdd"/>
</li>
</template>
<script>
import { inject } from 'vue'
import Api from '@/Api/API'
import UiClose from '@/components/Icons/IconClose.vue'
import QuantityPurchasedProduct from '@/components/Other/QuantityPurchasedProduct.vue'

export default {
  name: 'BasketListItem',
  props: {
    id: Number,
    quantity: Number
  },
  setup () {
    const basket = inject('basket')
    return {
      basket
    }
  },
  data () {
    return {
      data: null,
      quantityNumber: this.quantity
    }
  },
  created () {
    Api.GetItemsInfo(this.id).then(res => { this.data = res[0] })
  },
  methods: {
    remoneAdd () {
      this.basket.splice(this.basket.indexOf(this.id), 1)
    }
  },
  components: { UiClose, QuantityPurchasedProduct }
}
</script>
<style lang="scss">
// bs - basic components
.bc1-1{
    display: flex;
    align-items: center;
    position: relative;
    padding: 1rem 0;
    font-size: 1.125rem;
    line-height: var(--text-line-height);
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        background-color: var(--color-black);
    }
    &__img{
        max-width: 40px;
        height: 40px;
        margin-right: 0.625rem;
    }
    &__text{
       margin-right: 1rem;
       font-size: inherit;
    }
    &__text-model{
        flex-grow: 1;
        font-size: inherit;
        color: var(--color-gray);
    }
  &__bt-close--small{
     height: 20px;
    width: 20px;
    margin-left: 1rem;
  }
  &__form-quantity{
    transform: scale(0.8);
  }
}
@media screen and (max-width: 600px) {
    .bc1-1{
      font-size: 0.875rem;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(3, 40px);
      &__imgl{
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      &__text{
        grid-column: 2 / 8;
        grid-row: 1 / 2;
      }
      &__text-model{
        grid-column: 2 / 9;
        grid-row: 2 / 3;
      }
      &__form-quantity{
        padding: 0.475rem 0.55rem;
        grid-column: 2 / 8;
        grid-row: 3 / 4;
        justify-self: start;
        & .ot7__quantity {
          padding: 0 1rem;
        }
      }
      &__bt-close--small.icons__close{
        grid-column: 8 / 9;
        grid-row: 1 / 2;
        align-self: baseline;
      }
    }
}
</style>
