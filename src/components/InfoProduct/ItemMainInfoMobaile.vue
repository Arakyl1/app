<template>
<div class="if1m">
    <h2 class="if1m__name">{{ data.name }}</h2>
    <h2 class="if1m__arrt --dark-gray">{{ data.art }}</h2>
    <div class="decor-line mtb-1"></div>
    <div class="if1m__ranting">
        <Ranting class="if1m__ranting-star" :rantingNuumber="Math.round(data.ranting)"/>
        <p class="if1m__reviews " :class="{'--gray': data.reviews.length === 0 }">Отзывы ({{ data.reviews.length}})</p>
    </div>
    <div class="decor-line mtb-1"></div>
    <div class="if1m__additional-info --flex">
        <p class="if1m__article"><span class="--gray">Артикул:</span> {{ data.itemArt }}</p>
        <p class="if1m__article"><span class="--gray">Модель: </span> {{ data.itemMod }}</p>
    </div>
    <div class="if1m__img-container mb-100">
        <img :src="data.img.big" :alt="data.name" class="if1m__img">
        <ProductCriticalInfo v-if="data.news" :class = "{ news: data.news }">new</ProductCriticalInfo>
        <ProductCriticalInfo v-else-if="data.sale" :class = "{ sail: data.sale }">sell</ProductCriticalInfo>
        <p :class="{'--red': !data.availability }" class="if1m__availability">{{ data.availability ? 'В наличие: ' + data.quantity : 'Нет в наличии'}}</p>
    </div>
    <div class="if1m__price-info mb-200">
        <ProductPriceInfo :sellInfo="data.sale" :priceInfo="data.price"/>
        <QuantityPurchasedProduct :dataQuantity="data.quantity" @quantity="(el) => this.quantity = el"/>
    </div>
    <div class="if1m__bt-cont --flex">
        <ButtonBasket :id="data.id" :availability="data.availability" :quantity="this.quantity" class="if1m__bt small"/>
        <ButtonAddFavorite class="if1m__bt bt bt--blue" :id="data.id"/>
        <ButtonShare class="if1m__bt bt bt--blue"/>
    </div>
</div>
</template>

<script>
import Ranting from '../Other/Ranting.vue'
import ProductCriticalInfo from '../Other/ProductCriticalInfo.vue'
import ButtonBasket from '../Button/ButtonBasket.vue'
import ButtonAddFavorite from '../Button/ButtonAddFavorite.vue'
import ButtonShare from '../Button/ButtonShare.vue'
import QuantityPurchasedProduct from '../Other/QuantityPurchasedProduct.vue'
import ProductPriceInfo from '../Other/ProductPriceInfo.vue'

export default {
  name: 'ItemMainInfoMobaile',
  props: {
    data: Object
  },
  data () {
    return {
      quantity: 0
    }
  },
  components: { Ranting, ProductCriticalInfo, ButtonBasket, ButtonAddFavorite, ButtonShare, QuantityPurchasedProduct, ProductPriceInfo }
}
</script>

<style lang="scss">
.if1m{
    &__name,
    &__arrt{
        font-size: 2.25rem;
        line-height: var(--text-line-height);
        display: inline-block;
        padding-right: 0.5rem;
    }
    &__ranting{
        display: flex;
        justify-content: space-between;
    }
    &__reviews,
    &__article{
        font-size: 1.125rem;
        line-height: var(--text-line-height);
        span {
            font-size: inherit;
            margin-right: 0.5rem;
        }
    }
    &__article{
        margin-right: 3rem;
    }
    &__ranting-star svg{
        margin-right: 1rem;
    }
    &__img-container{
        position: relative;
        text-align: center;
        min-height: 400px;
        .ot4{
            top: 50px;
        }
    }
    &__img{
        max-width: 80%;
        max-height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &__availability{
        font-size: 1.5rem;
        line-height: var(--text-line-height);
        position: absolute;
        left: 0;
        bottom: 0;
    }
    &__price-info{
        text-align: right;
    }
    &__price-info .ot7__price{
        font-size: 1.5rem;
        line-height: var(--text-line-height);
        display: inline-block;
        margin-right: 2rem;
        vertical-align: middle;
    }
    &__bt-cont{
        justify-content: end;
    }
    &__bt{
        margin-left: 1.5rem;
    }
    &__bt.bt__share{
        height: 55px;
        width: 55px;
    }
}
  .if1m__bt svg path{
    stroke: var(--color-white);
  }
  .if1m__bt.active{
    transition: all ease 0.3s;
    background-color: var(--color-red);
}
@media screen and (max-width: 550px) {
.if1m{
    &__name,
    &__arrt{
        font-size: 1.75rem;
    }
    }
}
</style>
