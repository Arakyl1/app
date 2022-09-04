<template>
    <div class="st4">
        <div class="st4__cont --flex">
          <div class="st4__bt bg--blue br--3px" :class="{ active: isActive, rightContent:  rightContent }">
            <IconMenu @click="showList"/>
            <a class="st4__header --inline-block --white --bold" @click="goOverToItems">{{ selectMenu.name }}</a>
            <SelectMenuItems @show-subcategor="showSubcategor" :active="rightContent"/>
            <SelectMenuRigntContent :qantile="choseCategor" :categor="categorItem" :active="rightContent"/>
          </div>
          <HeaderAdditionalLinks :activeMenu="isActive"/>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue'
import Api from '@/Api/API'
import SelectMenuItems from './selectMenuItems.vue'
import SelectMenuRigntContent from './selectMenuRigntContent.vue'
import IconMenu from '@/components/Icons/IconMenu.vue'
import HeaderAdditionalLinks from '../Header/HeaderAdditionalLinks.vue'
import router from '@/router'

export default {
  name: 'selectMenu',
  setup () {
    const mask = inject('mask')
    return {
      mask
    }
  },
  data () {
    return {
      selectMenu: [],
      categorItem: [],
      isActive: false,
      rightContent: false,
      choseCategor: 0
    }
  },
  created () {
    Api.GetSelctMenu().then(res => {
      this.selectMenu = res[0]
      this.choseCategor = res[0].children.length
    })
  },
  components: { SelectMenuItems, SelectMenuRigntContent, IconMenu, HeaderAdditionalLinks },
  methods: {
    showList () {
      this.rightContent = this.action = false
      this.categorItem = []
      this.mask = this.isActive = !this.isActive
    },
    showSubcategor (item) {
      this.mask = this.isActive = this.rightContent = this.isActive = true
      this.categorItem = item
    },
    hideSelecctMenu () {
      this.rightContent = this.action = this.isActive = this.mask = false
      this.categorItem = []
    },
    goOverToItems () {
      this.mask = false
      router.push({ path: '/items', query: { page: 1 } })
    }
  },
  watch: {
    $route () {
      this.hideSelecctMenu()
    },
    mask () {
      if (!this.mask) {
        this.hideSelecctMenu()
      }
    }
  }
}
</script>

<style lang="scss">
// st - stanadrt
// cont - content
.st4{
  &__content{
    min-height: 55px;
    position: relative;
  }
  &__bt{
    padding: 0.75rem 1rem;
    min-width: 136px;
    position: relative;
    transition: 0.2s;
    transition-delay: 0.7s;
    cursor: pointer;
    z-index: 100;
    &.active {
      z-index: 999;
      transition-delay: 0s;
      min-width: 256px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    &.rightContent{
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  &__bt.active > .st4-1__bt-catalog{
    transition-delay: 0.3s;
    transform: scaleY(1);
    opacity: 1;
  }
  &__header{
    vertical-align: super;
    margin-left: 1rem;
  }
}
</style>
