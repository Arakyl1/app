<template>
<div class="if1">
    <div class="if1__cont --flex">
        <ProductCriticalInfo v-if="data.news" :class = "{ news: data.news }">new</ProductCriticalInfo>
        <ProductCriticalInfo v-else-if="data.sale" :class = "{ sail: data.sale }">sell</ProductCriticalInfo>
        <div class="if1__img-container">
            <img :src="data.img.big" :alt="data.name" class="if1__img">
        </div>
        <div class="if1__info bg--lite-gray br--3px">
            <h2 class="text-36 --inline">{{ data.name + " " }}</h2>
            <p class="text-36 --inline --gray">{{ data.art }}</p>
            <div class="spacer--30px"></div>
            <div class="decor-line"></div>
            <div class="if1__ranting">
                <Ranting class="if1__ranting-star  --inline-block" :rantingNuumber="Math.round(data.ranting)"/>
                <p class="if1__reviews --inline" :class="{'--gray': data.reviews.length ===0 }">Отзывы ({{ data.reviews.length}})</p>
            </div>
            <div class="decor-line"></div>
            <div class="if1__additional-info">
                <p class="if1__article-number --inline-block"><span class="--gray">Артикул:</span> {{ data.itemArt }}</p>
                <p class="if1__model --inline-block"><span class="--gray">Модель: </span> {{ data.itemMod }}</p>
            </div>
            <div class="decor-line"></div>
            <div class="if1__prises --flex --space-betwen">
                <div>
                    <p v-if="data.sale" class="if1__price --inline">{{ (Math.floor((data.price)*0.9)) + currency}} </p>
                    <p :class="{ 'if1__sell-price --gray': data.sale}" class="if1__price --inline">{{ data.price + currency}}</p>
                </div>
                <QuantityPurchasedProduct :dataQuantity="data.quantity" @quantity="(el) => this.quantity = el"/>
            </div>
            <div class="decor-line"></div>
            <div class="if1__button --flex --space-betwen">
                <ButtonBasket class="small" :id="data.id" :availability="data.availability" :quantity="quantity"/>
                <p :class="{'if1__availability --red': !data.availability }" class="if1__availability">{{ data.availability ? 'В наличие: ' + data.quantity : 'Нет в наличии'}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Ranting from '@/components/Other/Ranting.vue'
import ButtonBasket from '@/components/Button/ButtonBasket.vue'
import ProductCriticalInfo from '@/components/Other/ProductCriticalInfo.vue'
import QuantityPurchasedProduct from '../Other/QuantityPurchasedProduct.vue'

export default {
  name: 'ItemBasicInformation',
  props: {
    data: Object
  },
  data () {
    return {
      currency: ' ₽',
      quantity: 1
    }
  },
  components: { Ranting, ButtonBasket, ProductCriticalInfo, QuantityPurchasedProduct }
}
</script>

<style lang="scss">
// if - iformation on product
// cont - content
.if1{
    &__cont{
        position: relative;
    }
    &__img-container {
        padding: 2rem;
        width: 50%;
        max-height: 560px;
        text-align: center;
    }
    &__img{
        max-height: 100%;
        max-width: 100%;
    }
    &__info{
        text-align: left;
        width: 50%;
        padding: 2rem;
    }
    &__prises{
        align-items: center;
    }
    &__price{
        vertical-align: bottom;
        font-size: var(--text-size-36);
        line-height: var(--text-line-height);
    }
    &__ranting,
    &__additional-info,
    &__prises{
        padding: 2rem 0;
    }
    &__reviews{
        vertical-align: super;
        margin-left: 1.25rem;
    }
    &__article-number,
    &__model,
    &__price{
        margin-right: 2rem;
       span{
        padding-right: 0.375rem;
       }
    }
    &__sell-price{
        position: relative;
        &::after{
            content: '';
            position: absolute;
            height: 3px;
            width: 100%;
            background-color: var(--color-gray);
            top: 50%;
            left: 0;
        }
    }
    &__from-quantity{
        min-width: 110px;
        border: 1px solid var(--color-black);
        padding: 0.75rem 0.625rem;
        vertical-align: bottom;
        & button{
            width: 12px;
            height: 12px;
            position: relative;
            cursor: pointer;
            & span{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 12px;
                height: 1.5px;
                background-color: var(--color-black);
                &:nth-child(2){
                    transform: rotate(90deg);
                }
            }
        }
    }
    &__quantity{
        padding: 0 1.625rem;
    }
    &__button{
       align-items: center;
       padding-top: 2rem;
    }
    &__availability{
        position: relative;
        &::before {
            content: none;
            position: absolute;
            left: -15px;
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            border: 2px solid var(--color-red);
            border-radius: 50%;
        }
        &.--red::before{
            content: '';
        }
    }
}
@media screen and (max-width: 1200px) {
  .if1__price {
    font-size: var(--text-size-24);
    line-height: var(--text-line-height);
  }
}
</style>
