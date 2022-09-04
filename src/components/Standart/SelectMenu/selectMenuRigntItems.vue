<template>
  <li @click="toggle" class="st4-2-1">
    <IconAdd class="icons__add" :active="isOpen"/>
    <a href="#" class="ml-1 st4-2-1__link --white">{{ title }}</a>
    <ul  v-if="isOpen" class="st4-2-1__list">
        <li v-for="item in children" class="st4-2-1__item"
        :key="item.name">
            <a class="st4-2-1__item-link text-14 --white" href="#">{{item.name}}</a>
        </li>
    </ul>
  </li>
</template>

<script>
import IconAdd from '@/components/Icons/IconAdd.vue'
export default {
  name: 'selectMenuRigntitems',
  props: {
    title: String,
    children: Array
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder () {
      return this.children && this.children.length
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) { this.isOpen = !this.isOpen }
    },
    changeType () {
      if (!this.isFolder) { this.isOpen = true }
    }
  },
  components: { IconAdd }
}
</script>

<style lang="scss">
// st - standart
.st4-2-1{
    min-width: 250px;
    padding: 0.75rem 2rem 0.75rem 1rem;
    &__link{
        transition: 0.3s;
        vertical-align:  top;
        &:hover{
            color: var(--color-yellow);
        }
    }
    &__item{
        padding: 0.5rem 0.625rem 0.5rem 3.5rem;
    }
    &__item-link{
        transition: 0.3s;
        &:hover{
            color: var(--color-yellow);
        }
    }
}
</style>
