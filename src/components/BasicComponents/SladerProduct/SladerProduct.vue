<template>
<section class="bc6">
    <div class="bc6__slader" ref="cont">
        <div class="bc6__info">
            <p class="bc6__title">{{ title }}</p>
            <div class="bc6__control --inline-block">
              <ButtonArround @click="prevItems" :class="{ disabled: sladerIndex === 0 }"/>
              <ButtonArround @click="nextItems" :class="{ disabled: this.index === 0 }" class="bc6__bt-arrow--prew"/>
            </div>
        </div>
        <div class="bc6__items --flex"  :style="{ 'margin-left': '-' + (100 * sladerIndex) + '%'}">
            <ProductCard v-for="item in items"
            :key = "item.id"
            :id ="item.id"
            :style="{ 'width': (productCardSize / this.quantityItemSlader) + 'px' }"
            />
        </div>
    </div>
</section>
</template>
<script>
import Api from '@/Api/API'
import { CreateObj } from '@/basicLogicJS/Create/Create'
import { nextSlade, prewSlade } from '@/basicLogicJS/Slader/Slader'

import ProductCard from '@/components/BasicComponents/ProductCard/ProductCard.vue'
import ButtonArround from '@/components/Button/ButtonArround.vue'

export default {
  name: 'SladerProduct',
  components: { ProductCard, ButtonArround },
  props: {
    title: String,
    categor: String
  },
  data () {
    return {
      items: [],
      sladerIndex: 0,
      productCardSize: 0
    }
  },
  created () {
    Api.GetItemsActual(this.categor).then(res => this.sortItem(res))
  },
  mounted () {
    this.productCardSize = this.$refs.cont?.clientWidth
    window.addEventListener('resize', () => {
      this.productCardSize = this.$refs.cont?.clientWidth
    })
  },
  computed: {
    index () {
      return (this.items.length / this.quantityItemSlader) - this.sladerIndex - 1
    },
    quantityItemSlader () {
      return this.productCardSize < 580 ? 2 : this.productCardSize < 900 ? 3 : 4
    }
  },
  methods: {
    sortItem (res) {
      res.forEach(el => el.availability ? this.items.unshift(new CreateObj(el)) : this.items.push(new CreateObj(el)))
    },
    nextItems () {
      this.sladerIndex = nextSlade(this.items, this.sladerIndex, this.quantityItemSlader)
    },
    prevItems () {
      this.sladerIndex = prewSlade(this.sladerIndex)
    }
  }
}
</script>

<style lang="scss">
.bc6{
  padding: 0;
  &__slader{
    margin: 0 -1rem;
    overflow: hidden;
  }
  &__title {
    font-size: 2.25rem;
    line-height: var(--text-line-height);
  }
  &__info {
    padding: 0 1rem 4rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  &__items{
    transition: all ease 0.6s;
  }
  &__bt-arrow--prew{
    transform: rotate(180deg);
    margin-left: 0.625rem;
  }
}
@media screen and (max-width: 720px) {
  .bc6__title{
    font-size: 1.75rem;
  }
}
@media screen and (max-width: 550px){
  .bc6{
    &__info{
      flex-wrap: wrap;
      padding-bottom: 2rem;
    }
    &__title{
      width: 100%;
      margin-bottom: 1rem;
    }
    &__control{
      width: 100%;
      text-align: end;
    }
  }
}
@media screen and (max-width: 450px) {
    .bc6__slader{
       margin: 0 -0.5rem;
    }
}
</style>
