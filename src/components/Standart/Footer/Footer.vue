<template>
<footer class="st2">
    <div class="content">
        <FooterStandart v-if="windowSize > 980"/>
        <FooterMobaile v-else/>
        <p class="st2__down-content">Все права защищены. Указанная стоимость товаров и условия их приобретения действительны на текущую дату.</p>
    </div>
</footer>
</template>
<script>
import FooterStandart from './FooterStandart.vue'
import FooterMobaile from './FooterMobaile.vue'
export default {
  name: 'FooterMain',
  data () {
    return {
      windowSize: 0
    }
  },
  mounted () {
    this.windowSize = window.innerWidth
    window.addEventListener('resize', () => { this.windowSize = window.innerWidth })
  },
  components: { FooterStandart, FooterMobaile }
}
</script>
<style lang="scss">
.st2{
    padding-bottom: 3rem;
    background-color: var(--color-black);
    color: var(--color-dark-gray);
    font-size: 0.75rem;
    line-height: var(--text-line-height);
    &__down-content{
    text-align: left;
    font-size: 0.675rem;
    color: var(--color-dark-gray);
    }
}
@media screen and (max-width: 1200px) {
    .st2{
        padding-bottom: 2rem;
    }
}
</style>
