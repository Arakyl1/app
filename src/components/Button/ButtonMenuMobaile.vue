<template>
<button class="bt__nemu-mobaile bg--blue">
    <IconMenu/>
</button>
</template>
<script>
import IconMenu from '../Icons/IconMenu.vue'
export default {
  name: 'ButtonMenuMobaile',
  components: { IconMenu }
}
</script>
<style lang="scss">
.bt__nemu-mobaile{
    height: 37px;
    width: 37px;
    background-color: var(--color-blue);
    border-radius: var(--border-radius-3px);
    vertical-align: top;
}
</style>
