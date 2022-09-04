<template>
  <div class="ot3__path-name">
    <router-link :to="'/'" class="ot3__main-name ot3__name --inline --dark-gray">Главная</router-link>
    <router-link :to="item.path" :class="item.path" class="ot3__name" v-for="item in data" :key="item.path">{{item.name}}</router-link>
  </div>
</template>

<script>

export default {
  name: 'PathName',
  data () {
    return {
      data: []
    }
  },
  created () {
    this.getRoutes()
  },
  watch: {
    $route () {
      this.getRoutes()
    }
  },
  methods: {
    getRoutes () {
      this.data = this.$route.matched
    }
  }
}
</script>

<style lang="scss">
// other
.ot3{
  &__path-name{
    padding: 1.25rem;
  }
  &__name {
  position: relative;
  padding-right: 1.25rem;
   &::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 10px;
      background-color: var(--color-dark-gray);
      clip-path: polygon( 0% 100%, 0 0%, 100% 50%);
      bottom: 50%;
      transform: translateY(60%);
      right: 5px;
  }
  &:last-child {
      color: var(--color-black);
      &::after{
          content: none;
      }
  }
}
}
</style>
