<template>
<div class="cp1">
    <h2 class="cp1__title">Каталог товаров</h2>
    <div class="cp1__number ">
        <p class="cp1__text --inline --dark-gray">Показывать:</p>
        <span class="--blue">по</span>
        <select class="none --blue" v-model="number">
            <option v-for="(item, index) in numders" :key="index"  :value="item">{{ item }}</option>
        </select>
    </div>
</div>
</template>

<script>

export default {
  emits: ['number'],
  data () {
    return {
      numders: [3, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
      number: 9
    }
  },
  watch: {
    number () {
      this.$emit('number', this.number)
    }
  }
}
</script>

<style lang="scss">
.cp1{
  &__title{
    font-size: 2.25rem;
    line-height: var(--text-line-height);
    display: inline-block;
  }
  &__number{
    float: right;
  }
  &__text{
    margin-right: 0.375rem;
  }
}
@media screen and (max-width: 620px) {
.cp1__number{
  display: none;
}
.cp1__title{
  font-size: 2rem;
}
}
</style>
