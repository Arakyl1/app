<template>
<section class="ad2__characteristic bg--lite-gray">
    <button class="bt bt--blue" @click="addSection">Добавить раздел</button>
    <button class="bt bt--black ml-1" @click="dataChare = null">Удалить раздел</button>
    <form class="ad2__add-section" v-if="dataChare !== null">
      <input type="text" class="ad2__input new" placeholder="Название раздела" v-model="dataChare.name">
      <div class="ad2__add-field" v-for="(item, index) in dataChare.content" :key="item">
        <input type="text" class="ad2__input new small" placeholder="Характеристика" v-model="dataChare.content[index].name">
        <input type="text" class="ad2__input new small" placeholder="Значение" v-model="dataChare.content[index].value">
      </div>
      <button type="button" class="bt bt--blue ad2__bt-mob" @click="addField">Добавить поле</button>
      <button type="button" class="bt bt--blue ml-1 ad2__bt-mob" @click="removeField">Удалить последнее поле</button>
      <button type="button" class="bt bt--yellow ad2__button-char ad2__bt-mob" @click="createSection">Создать раздел</button>
    </form>
    <div v-else class="spacer--20px"></div>
    <div class="ad2__container --flex" v-if="data.length !==0">
        <div class="ad2__item" v-for="item in data" :key="item">
            <h2 class="text-24">{{ item.name }}</h2>
            <div class="decor-line decor-line--margin--10px"></div>
            <div class="ad2__show-char --flex" v-for="el in item.content" :key="el">
                <p class="ad2__char-name text-18">{{ el.name }}</p>
                <p class="ad2__char-value text-18">{{ el.value }}</p>
            </div>
        </div>
    </div>
</section>
</template>

<script>

export default {
  name: 'AddItemCharacteristic',
  props: {
    create: Boolean
  },
  data () {
    return {
      data: [],
      dataChare: null
    }
  },
  computed: {
    checkDataChare () {
      return this.dataChare ? this.dataChare.content.find(el => el.name === '' || el.value === '') : null
    },
    checkDataLength () {
      return this.data.length
    }
  },
  methods: {
    addField () {
      this.dataChare.content.push({ name: '', value: '' })
    },
    removeField () {
      this.dataChare.content.pop()
    },
    addSection () {
      this.dataChare = { name: '', content: [] }
    },
    createSection () {
      if (!this.checkDataChare && this.dataChare.content.length !== 0) {
        this.data.push(this.dataChare)
        this.dataChare = null
      } else {
        alert('Некоретно введены данные')
      }
    }
  },
  watch: {
    checkDataLength () {
      this.$emit('characteristic', this.data)
      console.log(true)
    },
    create () {
      if (!this.create) {
        this.data = []
        this.dataChare = null
      }
    }
  }
}
</script>

<style lang="scss">
// ad - add Item
.ad2{
    &__characteristic{
      padding: 2rem;
    }
    &__container{
        flex-flow: column;
        max-height: 1500px;
        flex-wrap: wrap;
    }
    &__item{
        width: 47%;
    }
    &__show-char{
        margin-bottom: 1rem;
    }
    &__char-name, &__char-value{
        width: 50%;
    }
    &__char-value{
        text-align: right;
    }
}
.ad2{
    &__add-section{
        width: 50%;
        margin-top: 1.25rem;
    }
    &__input.new, &__input.new:hover, &__input.new:focus{
        width: 100%;
        padding: 0.5rem 0.375rem;
        border-radius: var(--border-radius-3px);
        border: 1px solid var(--color-black);
        margin-bottom: 1rem;
        &.small{
            width: 47%;
            &:last-child{
                float: right;
            }
        }
    }
}
.ad2__button-char{
    float: right;
}
@media screen and (max-width: 850px) {
  .ad2{
    &__characteristic {
      padding: 0.75rem;
    }
    &__section{
      width: 100%;
    }
    &__add-section{
      width: 100%;
    }
  }
}
@media screen and (max-width: 720px) {
  .ad2{
    &__bt-mob.bt{
      padding: 0.5rem 0.75rem;
      display: block;
      margin-bottom: 1.5rem;
      width: 100%;
      &.ml-1{
        margin-left: 0;
      }
    }
    &__add-section{
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
