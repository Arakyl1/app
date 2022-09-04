<template>
<button class="bt__filter none">
    <IconFilter class="bt__icon-filter"/>
</button>
</template>

<script>
import IconFilter from '../Icons/IconFilter.vue'
export default {
  name: 'ButtonFilter',
  components: { IconFilter }
}
</script>

<style lang="scss">
.bt{
    &__filter{
        height: 45px;
        width: 45px;
        background-color: var(--color-blue);
        border-radius: var(--border-radius-3px);
    }
    &__icon-filter{
        height: 30px;
        width: 30px;
        fill: var(--color-white);
    }
}
</style>
