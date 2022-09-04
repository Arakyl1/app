<template>
<button class="bt__basket text-16 bg--blue --white br--3px" :class="{ disabled: !availability }" @click="checkItem">
  <Basket :fill="'#FFFFFF'"></Basket>
    В корзину
  </button>
</template>
<script>
import Basket from '@/components/Icons/IconBasketSmall.vue'
import { inject } from 'vue'

export default {
  name: 'ButtonBasket',
  props: {
    id: Number,
    quantity: {
      type: Number,
      default: 1
    },
    availability: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const basket = inject('basket')
    return { basket }
  },
  data () {
    return {
    }
  },
  methods: {
    checkItem () {
      if (this.availability) {
        this.addItem()
      } else { alert('К сожалению этого товара нет на складе') }
    },
    addItem () {
      const res = this.basket.find(el => el.id === this.id)
      !res ? this.basket.push({ id: this.id, quantity: this.quantity }) : alert('Этот товар уже есть в вашей корзине')
    }
  },
  components: { Basket }
}
</script>

<style lang="scss">
.bt__basket{
  width: 100%;
  padding: 1.125rem 0;
  border: none;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  & svg {
    width: 19px;
    height: 19px;
    margin-right: 0.625rem;
    vertical-align: text-bottom;
  }
  &.small{
    width: 263px;
    margin-top: 0;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: var( --color-white);
    opacity: 0;
    transition: all ease 0.3s;

  }
  &:hover,
  :focus {
    &::after{
      opacity: 0.3;
    }
  }
  &.disabled{
    cursor: no-drop;
    &::after{
      opacity: 0.3;
    }
  }
}
</style>
