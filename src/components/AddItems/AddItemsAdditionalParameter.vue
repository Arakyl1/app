<template>
<div class="ad3__parameters">
    <div class="ad3__container bg--lite-gray --flex --space-betwen">
        <div class="ad3__item">
            <h3 class="ad3__title text-24">Описание товара</h3>
            <div class="decor-line"></div>
            <div class="spacer--30px"></div>
            <form class="form">
                <textarea class="ad3__textarea bg--white br--3px" v-model="description"></textarea>
            </form>
        </div>
        <div class="ad3__item">
            <h3 class="ad3__title text-24">Дополнительные опции</h3>
            <div class="decor-line"></div>
            <div class="spacer--30px"></div>
            <form class="form">
                <p class="ad3__form-item --inline-block" v-for="item in dataOption" :key="item.id">
                    <input type="checkbox" :id="item.id" :value="item.id" v-model="this.data">
                    <label class="text-18" :for="item.id">{{ item.name }}</label>
                </p>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AddItemsAdditionalParameter',
  props: {
    create: Boolean
  },
  data () {
    return {
      dataOption: [
        { id: 'top', name: 'Топ' },
        { id: 'sale', name: 'Скидка' },
        { id: 'news', name: 'Новый' },
        { id: 'delivery', name: 'Доставка' },
        { id: 'pick-up', name: 'Самовывоз' },
        { id: 'under-the-order', name: 'Под заказ' }
      ],
      data: [],
      description: '',
      validData: {}
    }
  },
  beforeUpdate () {
    this.createData()
  },
  methods: {
    createData () {
      this.validData = {}
      this.data.forEach(el => { this.validData[el] = true })
      this.validData.description = this.description
    }
  },
  watch: {
    create () {
      this.$emit('additional-parameter', this.validData)
      if (!this.create) {
        this.data = []
        this.description = ''
      }
    }
  }
}
</script>

<style lang="scss">
// ad - add Item
.ad3{
    &__container{
        padding: 2rem;
    }
    &__item{
        width: 48%;
    }
    &__title{
        margin-bottom: 1.25rem;
    }
    &__textarea, &__textarea:hover, &__textarea:focus{
        width: 100%;
        height: 300px;
        outline: none;
        border: 1px solid var(--color-black);
        padding: 1rem;
    }
    &__form-item{
        margin-right: 2rem;
        margin-bottom: 1rem;
        input{
            margin-right: 0.5rem;
        }
    }
}
@media screen and (max-width: 850px) {
  .ad3{
    &__container {
      flex-wrap: wrap;
    }
    &__item {
      width: 100%;
      &:first-child{
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
