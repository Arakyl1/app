<template>
    <div class="bc5" v-if="this.data.length !== 0">
        <div class="bc5__img-cont" ref="cont" :style="{ 'height': (this.heightCatd - 32) + 'px'}">
          <img class="bc5__img" :src ="data.img?.small" :alt="data.name">
          <div class="bc5__icon">
            <ButtonAddFavorite :id="id" class="bc5__bt-like"/>
        </div>
        <ProductCriticalInfo v-if="this.data.news" :class = "{ news: this.data.news }">new</ProductCriticalInfo>
        <ProductCriticalInfo v-else-if="this.data.sale" :class = "{ sail: this.data.sale }">sale</ProductCriticalInfo>
        </div>
        <div class="bc5__cont">
          <p class="bc5__article --dark-gray">{{ this.data.art }}</p>
          <router-link :to="`/items/${this.data.id}`" class="bc5__name-product">{{ data.name}}</router-link>
          <div class="spacer--10px"></div>
          <div v-if="this.data.availability" class="bc5__price-info">
            <ProductPriceInfo :sellInfo="data.sale" :priceInfo="data.price"/>
            <IconStatic class="bc5__static"/>
          </div>
          <p v-else class="bc5__availability --red">нет в наличие</p>
        </div>
        <ButtonBasket :id="id" :availability="this.data.availability"/>
    </div>
</template>

<script>
import Api from '@/Api/API'
import ProductCriticalInfo from '@/components/Other/ProductCriticalInfo.vue'
import ButtonBasket from '@/components/Button/ButtonBasket.vue'
import IconStatic from '@/components/Icons/IconStatic.vue'
import ButtonAddFavorite from '@/components/Button/ButtonAddFavorite.vue'
import ProductPriceInfo from '@/components/Other/ProductPriceInfo.vue'

export default {
  name: 'ProductCard',
  props: {
    id: Number
  },
  data () {
    return {
      data: []
    }
  },
  created () {
    Api.GetItemsInfo(this.id).then(res => { this.data = res[0] })
  },
  computed: {
    heightCatd () {
      return this.$attrs.style.width.split('px').join('')
    }
  },
  components: { ButtonBasket, IconStatic, ProductCriticalInfo, ButtonAddFavorite, ProductPriceInfo }
}
</script>

<style lang="scss">
.bc5 {
  max-width: 293px;
  padding: 0 1rem;
  flex-shrink: 0;
  &__img-cont{
  display: flex;
  position: relative;
  border-radius: var(--border-radius-3px);
  background-color: var(--color-lite-gray);
  }
  &__img {
    max-height: 80%;
    max-width: 80%;
    margin: auto;
    display: inline;
  }
  &__bt-like{
    background: none;
    svg path{
      stroke: var(--color-black);
    }
    &.active svg path{
      stroke: var(--color-red);
      fill: var(--color-red);
    }
  }
  &__icon{
    position: absolute;
    top: 1em;
    right: 1em;
  }
  &__cont{
    text-align: left;
   margin-bottom: 2rem;
  }
  &__article{
    font-size: 1.25rem;
    margin-top: 1.25em;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__name-product{
    font-size: 1.25rem;
    margin-top: 0.5rem;
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__price-info .ot7__price{
    text-transform: uppercase;
    font-size: 1.5rem;
    display: inline-block;
    margin-right: 1rem;
  }
  &__static{
    float: right;
  }
  &__availability{
    height: 29px;
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 1200px) {
  .bc5__static{
    display: none;
  }
  .bc5{
    &__article,
    &__name-product{
      font-size: 1rem;
    }
    &__price-info .ot7__price{
      font-size: 1.25rem;
    }
    &__availability{
      height: 21px;
    }
  }
}
@media screen and (max-width: 450px){
  .bc5{
    padding: 0 0.5rem;
    &__price-info .ot7__price{
      font-size: 1rem;
    }
  }
}
</style>
