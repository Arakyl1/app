<template>
<div class="st1-1">
  <h4 class="st1-1__title text-18 mb-0625">{{ title }}</h4>
      <ul class="st1-1__list">
        <li class="st1-1__list-item mb-0625" v-for="item in content" :key="(item?.name) ? item?.name : item">
          <input class="st1-1__list-checkbox" type="checkbox" :id="(item?.name) ? item?.name : item" :value="(item?.value) ? item?.value : item" v-model="data">
          <label class="st1-1__list-text" :for="(item?.name) ? item?.name : item">{{ (item?.name) ? item?.name : item }}</label>
        </li>
    </ul>
    <div class="decor-line mtb-0675"></div>
</div>
</template>

<script>
export default {
  name: 'FilterList',
  props: {
    title: String,
    content: Array,
    reset: Boolean
  },
  data () {
    return {
      data: []
    }
  },
  beforeUpdate () {
    this.$emit('maker-data', this.data)
  },
  watch: {
    reset () {
      this.data = []
    }
  }
}
</script>
<style lang="scss">
// st - standart
.st1-1{
    &__list-checkbox{
      height: 16px;
      width: 15px;
    }
    &__list-text{
      padding-left: 1rem;
    }
}
</style>
