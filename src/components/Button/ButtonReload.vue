<template>
<button class="bt__reload bg--blue br--3px">
    <UiReload :color="color" class="bt__reload-icons"/>
</button>
</template>

<script>
import UiReload from '@/components/Icons/IconReload.vue'
export default {
  name: 'ButtonReload',
  components: { UiReload },
  data () {
    return {
      color: '#FFFFFF'
    }
  }
}
</script>

<style lang="scss">
.bt__reload{
  height: 55px;
  width: 55px;
  cursor: pointer;
  &-icons{
    min-width: 25px;
    height: 25px;
  }
}

</style>
