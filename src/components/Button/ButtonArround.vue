<template>
<button class="bt__arround bg--blue br--3px">
    <IconArround/>
</button>
</template>
<script>
import IconArround from '../Icons/IconArround.vue'
export default {
  name: 'ButtonArrow',
  components: { IconArround }
}
</script>
<style lang="scss">
.bt__arround{
    width: 43px;
    height: 43px;
    transition: all ease 0.3s;
    cursor: pointer;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 43px;
        width: 43px;
        background-color: var(--color-white);
        opacity: 0;
        transition: all ease 0.3s;
    }
    &.disabled {
        &::after{
            opacity: 0.3;
        }
    }
}
</style>
