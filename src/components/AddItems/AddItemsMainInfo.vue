<template>
    <section class="ad1">
        <div class="ad1__container --flex">
            <div class="ad1__img  ad1__flex-item">
                <form class="ad1__form--img">
                    <label class="ad1__label--img">
                        <p class="ad1__text-img text-24">Ссылка на большое фото товара</p>
                        <input type="text" class="ad1__input new" v-model="data.img.big" :class="{ border: this.validateDate.imgBig}">
                    </label>
                    <label class="ad1__label--img">
                        <p class="ad1__text-img text-24">Ссылка на малое фото товара</p>
                        <input type="text" class="ad1__input new" v-model="data.img.small" :class="{ border: this.validateDate.imgSmall}">
                    </label>
                </form>
            </div>
            <div class="ad1__main-info ad1__flex-item bg--lite-gray">
                <form class="ad1__form-cont">
                    <label class="ad1__label--info">
                        <input type="text" class="ad1__input new" placeholder="Название товара" v-model="data.name" :class="{ border: this.validateDate.name}">
                    </label>
                    <label class="ad1__label--info">
                        <input type="text" class="ad1__input new" placeholder="Код продукта" v-model="data.art" :class="{ border: this.validateDate.art}">
                    </label>
                    <label class="ad1__label--info">
                        <input type="text" class="ad1__input new" placeholder="Производитель" v-model="data.maker" :class="{ border: this.validateDate.maker}">
                    </label>
                </form>
                <form class="ad1__form-cont">
                    <label class="ad1__label--info inline-block">
                        <input type="text" class="ad1__input new " placeholder="Категория" v-model="data.categor" :class="{ border: this.validateDate.categor}">
                    </label>
                    <label class="ad1__label--info inline-block">
                        <input type="text" class="ad1__input new " placeholder="Подкатегория" v-model="data.subcategor">
                    </label>
                </form>
                <div class="decor-line"></div>
                <div class="spacer--30px"></div>
                <form class="ad1__form-cont">
                    <label class="ad1__label--info inline-block">
                        <input type="text" class="ad1__input new " placeholder="Артикул" v-model="data.itemArt" :class="{ border: this.validateDate.itemArt}">
                    </label>
                    <label class="ad1__label--info inline-block">
                        <input type="text" class="ad1__input new " placeholder="Код модели" v-model="data.itemMod" :class="{ border: this.validateDate.itemMod}">
                    </label>
                </form>
                <div class="decor-line"></div>
                <div class="spacer--30px"></div>
                <form class="ad1__form-cont">
                    <label class="ad1__label--info inline-block">
                        <input type="number" class="ad1__input new " placeholder="Цена" v-model="data.price" :class="{ border: this.validateDate.price}">
                    </label>
                    <label class="ad1__label--info inline-block">
                        <input type="number" class="ad1__input new " placeholder="Количество товара на складе" v-model="data.quantity" :class="{ border: this.validateDate.quantity}">
                    </label>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'AffItemsMainInfo',
  props: {
    create: Boolean
  },
  data () {
    return {
      data: {
        name: '',
        art: '',
        maker: '',
        categor: '',
        subcategor: '',
        price: '',
        itemArt: '',
        itemMod: '',
        quantity: '',
        img: { small: '', big: '' }
      }
    }
  },
  computed: {
    validateDate () {
      return {
        name: this.data.name === '',
        maker: this.data.maker === '',
        categor: this.data.categor === '',
        price: (this.data.price === '' || this.data.price <= 0),
        art: this.data.art === '',
        itemArt: this.data.itemArt === '',
        itemMod: this.data.itemMod === '',
        quantity: (this.data.quantity === '' || this.data.quantity < 0),
        imgSmall: this.data.img.small === '',
        imgBig: this.data.img.big === ''
      }
    },
    checkEngValidation () {
      return Object.entries(this.validateDate).find(el => el[1] === true)
    }
  },
  watch: {
    validateDate () {
      if (!this.checkEngValidation) {
        this.$emit('main-data', this.data)
      }
    },
    create () {
      this.data = {
        name: '',
        art: '',
        maker: '',
        categor: '',
        subcategor: '',
        price: '',
        itemArt: '',
        itemMod: '',
        quantity: '',
        img: { small: '', big: '' }
      }
    }
  }
}
</script>

<style lang="scss">
// ad - add Item
.ad1{
    &__container{
        width: 100%;
    }
    &__flex-item{
        width: 50%;
        padding: 2rem;
    }
    &__text-img{
        margin-bottom: 0.625rem;
    }
    &__label--img{
        display: block;
        padding-bottom: 1.25rem;
    }
    &__input.new, &__input:hover.new, &__input:focus.new {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid var(--color-dark-gray);
        border-radius: var(--border-radius-3px);
        &.border{
            border: 1px solid var(--color-red);
        }
    }
    &__label--info{
        display: block;
        margin-bottom: 1.25rem;
    }
}
.ad1__label--info.inline-block{
   display: inline-block;
   width: 48%;
   &:last-child {
    float: right;
   }
}
@media screen and (max-width: 850px) {
    .ad1{
        &__container{
            flex-wrap: wrap;
        }
        &__flex-item {
            width: 100%;
            padding: 0.75rem;
        }
    }
}
</style>
