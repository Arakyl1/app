<template>
<div>
  <button class="bt__basket-header">
    <IconBasket class="h1__icon" @click="showBasket" :class="{ active: this.basket.length > 0}"/>
  </button>
  <div class="bc1__basket" :class="{ active: this.basketActive}">
    <div class="bc1__cont">
        <h2 class="bc1__title">Корзина</h2>
        <IconsClose class="bc1__bt-close" @click="this.basketActive = this.mask = !this.basketActive"/>
        <div class="decor-line"></div>
        <div class="bc1__cont-items">
            <ul class="bc1__list" v-if="basket.length !== 0">
                <BasketListItem v-for="(item, index) in basket" :key="index" :id="item.id" :quantity="item.quantity" class="bc1__item"/>
            </ul>
            <p v-else class="bc1__text text-18 --dark-gray">Ваша корзина пуста</p>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { inject } from 'vue'
import IconBasket from '@/components/Icons/IconBasket.vue'
import IconsClose from '@/components/Icons/IconClose.vue'
import BasketListItem from '@/components/BasicComponents/Basket/BasketListItem.vue'
export default {
  setup () {
    const basket = inject('basket')
    const mask = inject('mask')
    return {
      basket,
      mask
    }
  },
  data () {
    return {
      basketActive: false
    }
  },
  methods: {
    showBasket () {
      this.mask = this.basketActive = !this.basketActive
    }
  },
  watch: {
    mask () {
      if (!this.mask && this.basketActive) {
        this.basketActive = !this.basketActive
      }
    }
  },
  components: { IconBasket, IconsClose, BasketListItem }
}
</script>

<style lang="scss">
  // bs - basic components
.bc1{
    &__basket{
    position: fixed;
    width: 900px;
    text-align: left;
    min-height: 60%;
    z-index: 801;
    top: 50%;
    left: 50%;
    transform-origin: top;
    transform: translate(-50%, -50%) scaleY(0);
    background-color: var(--color-lite-gray);
    border-radius: var(--border-radius-3px);
    opacity: 0;
    transition: all ease 0.3s;
    &.active{
        opacity: 1;
        transform: translate(-50%, -50%) scaleY(1);
    }
    }
    &__cont{
        height: 100%;
        padding: 2rem;
    }
    &__title{
        font-size: 1.5rem;
        line-height: var(--text-line-height);
        padding-bottom: 1.25rem;
        display: inline-block;
    }
    &__bt-close{
        float: right;
    }
    &__cont-items{
        height: 85%;
    }
    &__text {
        padding: 1.25rem;
    }
    &__item:last-child::after{
        content: none;
    }
}
.bt__basket-header {
  background: none;
}
@media screen and (max-width: 1000px) {
    .bc1__basket{
        width: 90vw;
    }
}
</style>
