<template>
    <div class="st1 bg--lite-gray br--3px">
        <h4 class="st1__title text-18">Категория</h4>
        <div class="st1__sel-container">
            <select class="st1__sel" v-model="filterList.cat" >
                <option  value="Категория">Категория</option>
                <option v-for="item in categor" :key="item" :value="item.name">{{ item.name }}</option>
            </select>
        </div>
        <div class="spacer--20px"></div>
        <h4 class="st1__title text-18">Подкатегория</h4>
        <div class="st1__sel-container" :class="[ sudCategor.length == 0 ? 'disabled' : '' ]">
            <select class="st1__sel" v-if="sudCategor.length !== 0">
                <option v-for="item in sudCategor[0].children" :key="item">{{ item.name }}</option>
            </select>
            <span v-else>Подкатегория</span>
        </div>
        <div class="decor-line mtb-0675"></div>
        <h4 class="st1__title text-18">Цена</h4>
        <div class="st1__prices --flex --space-betwen">
        <input class="st1__prices-input" v-model="this.filterList.price.from" :class="{ border: borderActivePrice }" type="number" placeholder="От">
          <span class="st1__prices-colon --blue" >:</span>
          <input class="st1__prices-input"  v-model="this.filterList.price.upTo" :class="{ border: borderActivePrice }" type="number" placeholder="До">
        </div>
        <div class="decor-line mtb-0675"></div>
        <FilterList v-if="maker.length !== 0" :title="'Бренд'" :content="maker" @maker-data="addData($event, 'maker')" :reset="reset"/>
        <h4 class="st1__title text-18 mb-0625">Рейтинг</h4>
          <Ranting @ranting="filterList.ranting = $event" :rantingNuumber="this.filterList.ranting"/>
        <div class="decor-line mtb-0675"></div>
        <FilterList :title="'Другое'" :content="othet" @maker-data="addData($event, 'actual')" :reset="reset"/>
        <FilterList :title="'Доставка и наличие'" :content="otherService" @maker-data="addData($event, 'other')" :reset="reset"/>
        <div class="spacer--20px"></div>
        <div class="--flex --space-betwen">
          <ButtonShow @click="sendData" class="st1__bt-send"/>
          <ButtonReload @click="resettingItems"/>
        </div>
    </div>
</template>

<script>
import ButtonReload from '@/components/Button/ButtonReload.vue'
import Api from '@/Api/API'
import FilterList from './FilterList.vue'
import Filter from '@/basicLogicJS/Filter/Filter'
import Ranting from '@/components/Other/Ranting.vue'
import ButtonShow from '@/components/Button/ButtonShow.vue'
import { inject } from 'vue'
import router from '@/router'

export default {
  name: 'FilterContent',
  components: { Ranting, ButtonShow, ButtonReload, FilterList },
  setup () {
    const mask = inject('mask')
    return { mask }
  },
  data () {
    return {
      categor: [],
      maker: [],
      reset: false,
      othet: [{ name: 'Новинки', value: 'news' }, { name: 'Акции', value: 'sale' }],
      otherService: [
        { name: 'Доставка', value: 'delivery' },
        { name: 'Самовывоз', value: 'pick-up' },
        { name: 'Под заказ', value: 'under-the-order' },
        { name: 'В наличии', value: 'availability' }],
      filterList: { cat: '', price: { from: '', upTo: '' }, maker: [], ranting: 0, actual: [], other: [] }
    }
  },
  created () {
    Api.GetArraySelectMeni().then(res => { this.categor = res })
    this.$route.query?.title ? this.filterList.cat = this.$route.query.title : this.filterList.cat = 'Категория'
  },
  mounted () {
    this.$emit('data-filter', this.filterList)
    console.log(2)
  },
  computed: {
    sudCategor () {
      return this.categor.filter(item => item.name === this.categorActive)
    },
    borderActivePrice () {
      return (this.filterList.price.from < 0 ||
        (this.filterList.price.from > this.filterList.price.upTo &&
        this.filterList.price.upTo !== ''))
    },
    categorActive () {
      return this.filterList.cat
    }
  },
  methods: {
    sendData () {
      if (!this.borderActivePrice && this.filterList.cat !== 'Категория') {
        this.$emit('data-filter', this.filterList)
        this.mask = false
      } else {
        alert('Проверьте введеные параметры')
      }
    },
    resettingItems () {
      this.filterList = { cat: 'Категория', price: { from: '', upTo: '' }, maker: [], ranting: 0, actual: [], other: [] }
      this.reset = !this.reset
      this.maker = []
      this.mask = false
      router.push({ query: { page: 1 } })
    },
    addData (el, way) {
      this.filterList[way] = el
    },
    checkMakerList (res) {
      res.forEach(el => {
        if (!this.maker.includes(el.maker)) {
          this.maker.push(el.maker)
        }
      })
    }
  },
  watch: {
    categorActive () {
      if (this.filterList.cat !== 'Категория') {
        this.maker = []
        router.push({ query: { title: this.filterList.cat, page: 1 } })
        Filter.ListMaker(this.categorActive).then(res => this.checkMakerList(res))
      }
    },
    $route () {
      if (this.$route.query?.title) {
        this.filterList.cat = this.$route.query.title
      }
      if (this.$route.query?.title !== 'Категория') {
        this.$emit('data-filter', this.filterList)
      }
    }
  }
}
</script>

<style lang="scss">
// st - standart
// sel - select
.st1{
    text-align: left;
    padding: 2rem 1.25rem;
    &__title{
      margin-bottom: 0.625rem
    }
    &__sel-container{
    max-width: 100%;
    padding: 0.75rem;
    position: relative;
    text-align: left;
    border-radius: var(--border-radius-3px);
    background-color: var(--color-white);
    color: var(--color-dark-gray);
    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 5px;
        background-color: var(--color-blue);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        top: 0;
        bottom: 0;
        right: 13px;
        margin: auto 0;
    }
    &.disabled{
        background-color: var(--color-dark-gray);
        cursor: no-drop;
    }
    }
    &__sel{
      appearance: none;
      background-color: transparent;
      border: none;
      margin: 0;
      width: 100%;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
      outline: none;
      padding: 0 0.75rem;
    }
    &__prices-input{
      width: 47%;
      padding: 0.75rem;
      transition: all ease 0.5s;
      color: var(--color-dark-gray);
      border-radius: var(--border-radius-3px);
      &.border{
        outline: 1px solid var(--color-red);
      }
    }
    &__prices-colon{
      padding: 0.75rem;
    }
    &__bt-send{
      max-width: calc(100% - 55px - 10px);
      width: 100%;
    }
}
</style>
