<template>
<div>
  <button class="bt__favorite" :class="{ active: this.favoriteItemslength > 0 }">
      <IconLike class="h1__icon" @click="showFavorite"/>
  </button>
  <div class="bc4"  :class="{active: favoriteActive}">
    <h2 class="bc4__title">Ваши избранный</h2>
    <div class="decor-line mtb-1"></div>
    <div class="bc4__container-scroll"  v-if="favoriteItems.length !== 0">
        <div class="bc4__container --flex" ref="cont">
            <BasicProductInfo v-for="item in favoriteItems"
            :key="item.id"
            :id="item.id"
            :style="{ 'width': ((blockdSize / this.quantityItemSlader) - 0.5)+ 'px' }" class="bc4__item"/>
        </div>
    </div>
    <p v-else class="bc4__text text-18 --gray">Ваши избраны пусты</p>
  </div>
</div>
</template>
<script>
import IconLike from '@/components/Icons/IconLike.vue'
import BasicProductInfo from '@/components/BasicComponents/ProductCard/ProductCard.vue'
import { inject } from 'vue'
export default {
  name: 'ButtonShowFavorite',
  setup () {
    const favoriteItems = inject('favoriteItems')
    const mask = inject('mask')
    return {
      favoriteItems,
      mask
    }
  },
  data () {
    return {
      blockdSize: 0,
      favoriteActive: false
    }
  },
  beforeUpdate () {
    this.blockdSize = this.$refs.cont?.clientWidth
    window.addEventListener('resize', () => { this.blockdSize = this.$refs.cont?.clientWidth })
  },
  computed: {
    favoriteItemslength () {
      return this.favoriteItems.length
    },
    quantityItemSlader () {
      return this.blockdSize < 630 ? 2 : 3
    }
  },
  methods: {
    showFavorite () {
      this.mask = this.favoriteActive = !this.favoriteActive
    }
  },
  watch: {
    mask () {
      if (!this.mask && this.favoriteActive) {
        this.favoriteActive = !this.favoriteActive
      }
    }
  },
  components: { IconLike, BasicProductInfo }
}
</script>
<style lang="scss">
  .bt__favorite {
    background: none;
  }
  .bt__favorite .h1__icon path {
    stroke: var(--color-black);
    transition: all ease 0.3s;
  }
  .bt__favorite.active .h1__icon path {
    stroke: var(--color-red);
    fill: var(--color-red);
  }
  .bc4{
    position: fixed;
    text-align: left;
    height: 70vh;
    max-width: 943px;
    width: 100%;
    top: 10px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    background-color: var(--color-white);
    border-radius: var(--border-radius-3px);
    padding: 2rem;
    z-index: 801;
    opacity: 0;
    transform-origin: top right;
    transition: all ease 0.3s;
    &.active {
        top: 10%;
        opacity: 1;
        transform: translateX(-50%) scale(1);
    }
    &__container{
        flex-wrap: wrap;
        width: 100%;
    }
    &__container-scroll{
        padding-top: 1.25rem;
        overflow-y: auto;
        height: 85%;
        scrollbar-width: none;
        &::-webkit-scrollbar{
            width: 0;
            height: 0;
        }
    }
    &__title{
        font-size: 1.5rem;
        line-height: var(--text-line-height);
        color: var(--color-gray);
    }
    &__item{
        margin-bottom: 2em;
    }
    &__text {
        padding-left: 1.25em;
    }
}
@media screen and (max-width: 1000px) {
    .bc4{
        max-width: 650px;
    }
}
@media screen and (max-width: 670px) {
    .bc4{
       max-width: 618px;
       padding: 1rem;
    }
}
@media screen and (max-width: 480px) {
    .bc4__container-scroll{
       margin: 0 -0.5rem;
    }
}
</style>
