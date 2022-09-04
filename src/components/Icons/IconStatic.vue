<template>
  <svg class="icons__static" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{ active: redColor }" @click="redColor = !redColor">
    <path d="M0.125 10.5H2.20833V19.875H0.125V10.5ZM16.7917 6.33331H18.875V19.875H16.7917V6.33331ZM8.45833 0.083313H10.5417V19.875H8.45833V0.083313Z" fill="#383838" />
  </svg>
</template>

<script>
export default {
  data () {
    return {
      redColor: false
    }
  }
}
</script>

<style  lang="scss">
.icons__static{
    path {
      transition: all ease 0.3s;
    }
    &.active path{
    fill: var(--color-red);
}
}
</style>
