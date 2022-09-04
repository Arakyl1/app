<template>
    <p class="ot4 --white" >
    <slot></slot>
    </p>
</template>
<script>
export default {
  name: 'ProductCriticalInfo'
}
</script>

<style lang="scss">
// other
.ot4{
    position: absolute;
    padding: 0.125rem 0.875rem;
    top: 15px;
    left: 0;
    border-radius: 0 3px 3px 0;
    text-transform: uppercase;
    display: none;
    &.news {
      background-color: var(--color-yellow);
      display: block;
    }
    &.sail{
      background-color: var(--color-red);
      display: block;
    }
}
@media screen and (max-width: 1200px) {
  .ot4{
    font-size: 0.875rem;
  }
}
</style>
