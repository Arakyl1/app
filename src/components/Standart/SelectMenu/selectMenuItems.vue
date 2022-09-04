<template>
  <ul class="st4-1__bt-catalog">
    <li class="st4-1__item" v-for="item in data" :key="item.name" :class="{ 'right-content': active }">
    <router-link :to = "{ path: '/items', query: {title: item.name, page: 1}}" class="st4-1__link">{{ item.name }}</router-link>
        <span class="st4-1__icon" @click="this.$emit('show-subcategor', item.children)">
          <IconArround />
        </span>
    </li>
  </ul>
</template>
<script>
import Api from '@/Api/API'
import IconArround from '@/components/Icons/IconArround.vue'
export default {
  name: 'SelectMenuItems',
  props: {
    active: Boolean
  },
  data () {
    return {
      data: null
    }
  },
  created () {
    Api.GetSelctMenu().then(res => { this.data = res[0].children })
  },
  components: { IconArround }
}
</script>

<style lang="scss">
.st4-1{
  &__bt-catalog{
    height: 100%;
    position: absolute;
    bottom: -55px;
    left: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition: 0.5s;
    opacity: 0;
    z-index: 999;
    min-width: 256px;
    transition-delay: 0.4s;
  }
  &__item{
    padding: 1rem 1.25rem;
    text-align: left;
    z-index: 999;
    height: 100%;
    transition: 0.3s;
    border-top: 1px solid var(--color-gray);
    background-color: var(--color-blue);
    position: relative;
    font-weight: 500;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--color-white);
      opacity: 0;
      transition: 0.3s;
      z-index: -1;
    }
    &.right-content:last-child{
      border-bottom-right-radius: 0;
    }
    &:hover {
      &::after{
        opacity: 0.3;
      }
    }
    &:hover > .item-around{
      right: 10px;
    }
    &:last-child{
      border-bottom-right-radius: var(--border-radius-3px);
      border-bottom-left-radius: var(--border-radius-3px);
    }
  }
  &__link{
      color: var(--color-white);
  }
  &__icon{
  position: absolute;
  right: 15px;
  transform: scale(-1);
  transition: 0.3s;
  }
}
</style>
