<template>
    <div class="st4-2 bg--blue" :class="{ active: this.active }" :style="{ height: (55 * (qantile + 1)) + 'px'}">
        <ul class="st4-2__cat --flex">
            <SelectMenuRigntItems
            v-for="item in categor"
            :key="item.name"
            :title="item.name"
            :children="item.children"
            />
        </ul>
    </div>
</template>

<script>
import SelectMenuRigntItems from './selectMenuRigntItems.vue'
export default {
  name: 'selectMenuRigntContent',
  props: {
    qantile: Number,
    categor: Object,
    active: Boolean
  },
  components: { SelectMenuRigntItems }
}
</script>

<style lang="scss">
// st - standart
// cat - categor
.st4-2{
    position: absolute;
    width: 500px;
    top: 0;
    left: 256px;
    border-top-right-radius: var(--border-radius-3px);
    border-bottom-right-radius: var(--border-radius-3px);
    transform-origin: top left;
    transform: scale(0);
    transition: 0.3s;
    opacity: 0;
    z-index: 999;
    &.active{
        transform: scale(1);
        opacity: 1;
    }
    &__cat{
        height: 100%;
        flex-wrap: wrap;
        flex-direction: column;
        padding-top: 3.375rem;
    }
}
</style>
