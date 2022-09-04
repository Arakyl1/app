<template>
    <div class="st3-3" ref="cont">
      <div class="st3-3__arroy" @click="listOfset" :class="{ active:action }"></div>
      <ul class="st3-3__link-container --flex bg--lite-gray" :style="{'margin-left': style + '%'}" ref="scroll">
        <li v-for="item in data" :key="item.name" class="st3-3__link">
            <router-link :to = "{ path: '/items', query: {title: item.name, page: 1}}" >{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
</template>
<script>
import Api from '@/Api/API'

export default {
  name: 'HeaderAdditionalLinks',
  props: {
    activeMenu: Boolean
  },
  data () {
    return {
      data: null,
      style: 0,
      action: false
    }
  },
  created () {
    Api.GetSelctMenu().then(res => { this.data = res[0].children })
  },
  methods: {
    listOfset () {
      const width = this.$refs.cont.clientWidth
      const widthBig = this.$refs.scroll.scrollWidth
      this.action = !this.action
      const ratio = (widthBig - width) / (width / 100)
      if (this.action) {
        this.style = '-' + (ratio + 4)
      } else {
        this.style = 0
      }
    }
  },
  watch: {
    activeMenu () {
      if (this.activeMenu) {
        this.style = 0
      }
    }
  }
}
</script>

<style lang="scss">
    .st3-3{
        min-height: 55px;
        position: relative;
        overflow: hidden;
      &__link-container{
        transition: 0.4s;
      }
      &__link{
        white-space: nowrap;
        padding: 1.125rem 0px 1.125rem 1.5rem;
        transition: 0.3s;
        & a:hover{
          color: var(--color-yellow);
        }
      }
      &__arroy{
        background-image: url(@/assets/svg/arrow-left-greey.svg);
        position: absolute;
        right: 0;
        height: 100%;
        width: 20px;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 999;
        transition: 0.4s;
        &.active{
         transform: rotate(180deg);
        }
      }
      &::after{
        content: ' ';
        position: absolute;
        top: 0;
        right: -2px;
        height: 100%;
        width: 50px;
        background: linear-gradient( to right, transparent, var(--color-white));
      }
    }
</style>
