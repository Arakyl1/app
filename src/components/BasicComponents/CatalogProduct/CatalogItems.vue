<template>
  <CatalogHeader @number="(el) => this.size = el"/>
  <div class="spacer--50px"></div>
  <div class="bc2__items --flex">
  <div class="bc2__filter-cont" :class="{ active: filterShow }">
    <FilterContent  class="bc2__filter" @data-filter="createItems($event, this.$route.query.page, this.size)"/>
  </div>
  <ButtonFilter class="bc2__bt-fiter" @click="showFilter" />
  <div class="bc2__container" ref="cont">
    <div class="bc2__cont --flex" v-if="itemsInfo.length !==0">
     <ProductCard v-for="item in itemsInfo"
    :key = "item.id"
    :id="item.id"
    :style="{ 'width': ((windowSaze / numberProduct) - 0.5) + 'px' }"
    class="bc2__item"
    />
    </div>
    <p v-else class="bc2__message-fail-seacrh text-24 --dark-gray">По вашему запросу ничего нет</p>
    <div class="bc2__bt-control --flex">
      <ButtonArround class="bc2__bt" @click="$route.query.page > 1 ? updatePagePrev() : ''"/>
      <div class="insert--125px"></div>
      <ButtonArround class="bc2__bt" @click="updatePageNext"/>
    </div>
  </div>
</div>
<div class="spacer--50px"></div>
</template>

<script>
import { inject } from 'vue'
import Filter from '@/basicLogicJS/Filter/Filter'
import ProductCard from '@/components/BasicComponents/ProductCard/ProductCard.vue'
import FilterContent from '@/components/Standart/Filter/FilterContent.vue'
import ButtonArround from '@/components/Button/ButtonArround.vue'
import CatalogHeader from '@/components/CatalogProduct/CatalogHeader.vue'
import ButtonFilter from '@/components/Button/ButtonFilter.vue'
import router from '@/router'

export default {
  name: 'CatalogItems',
  components: { ProductCard, ButtonArround, FilterContent, CatalogHeader, ButtonFilter },
  setup () {
    const mask = inject('mask')
    return { mask }
  },
  data () {
    return {
      itemsInfo: [],
      pageNumber: 1,
      size: 9,
      windowSaze: 0,
      filter: {},
      filterShow: false
    }
  },
  created () {
    this.pageNumber = this.$route.query.page
  },
  mounted () {
    this.windowSaze = this.$refs.cont?.clientWidth
    window.addEventListener('resize', () => { this.windowSaze = this.$refs.cont?.clientWidth })
  },
  methods: {
    createItems (f, p, l) {
      this.itemsInfo = []
      this.filter = f
      Filter.FilterOur(f, p, l).then(res => { this.itemsInfo = res })
    },
    showFilter () {
      this.filterShow = this.mask = !this.filterShow
    },
    updatePagePrev () {
      router.push({ query: this.$route.query?.title ? { title: this.$route.query.title, page: parseInt(this.$route.query.page) - 1 } : { page: parseInt(this.$route.query.page) - 1 } })
    },
    updatePageNext () {
      router.push({ query: this.$route.query?.title ? { title: this.$route.query.title, page: parseInt(this.$route.query.page) + 1 } : { page: parseInt(this.$route.query.page) + 1 } })
    }
  },
  computed: {
    numberProduct () {
      return (this.windowSaze < 600) ? 2 : 3
    }
  },
  watch: {
    size () {
      if (parseInt(this.$route.query.page) === 1) {
        this.createItems(this.filter, this.$route.query.page, this.size)
        console.log(1)
      } else { router.push({ query: this.$route.query?.title ? { title: this.$route.query.title, page: 1 } : { page: 1 } }) }
    },
    mask () {
      if (!this.mask && this.filterShow) {
        this.filterShow = false
      }
    },
    windowSaze () {
      if (this.windowSaze < 600) {
        this.size = 10
      }
    }
  }
}
</script>
<style lang="scss">
// bc - basic components
// cont - content
.bc2{
  &__items{
  margin: 0 -1em;
  }
  &__bt-fiter{
    display: none;
  }
  &__filter-cont{
    padding: 0 1rem;
    max-width: calc(100% / 4);
  }
  &__container{
  min-height: 1000px;
  width: 100%;
  position: relative;
  }
  &__cont{
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-grow: 1;
  padding-bottom: 3.125em;
  }
  &__item{
    margin-bottom: 2em;
  }
  &__bt-control{
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    justify-content: center;
  }
  &__bt{
    &:last-child{
      transform: scale(-1);
    }
  }
  &__message-fail-seacrh{
    padding: 0 2em;
    font-weight: 300;
  }
}
@media screen and (max-width: 980px) {
  .bc2__filter-cont{
    position: fixed;
    padding: 0;
    z-index: 801;
    min-width: 60vw;
    max-height: 100vh;
    top: 0;
    left: 0;
    overflow: scroll;
    transform: translateX(-200%);
    transition: 0.3s;
    &.active{
      transform: translateX(0);
    }
  }
  .bc2__bt-fiter{
    display: block;
    position: fixed;
    z-index: 101;
    bottom:20%;
  }
}
@media screen and (max-width: 600px){
  .bc2__filter-cont{
    min-width: 100vw;
  }
}
@media screen and (max-width: 450px) {
    .bc2__items{
       margin: 0 -0.5rem;
    }
}
</style>
