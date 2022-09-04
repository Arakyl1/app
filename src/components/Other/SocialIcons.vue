<template>
<div class="ot6">
  <ul class="ot6__list --flex" :class="{ 'ot6__list--left': left}">
    <li class="ot6__item"><img class="ot6__img" src="@/assets/componets/iconSocials/vkontakte.png" alt="#"></li>
    <li class="ot6__item"><img class="ot6__img" src="@/assets/componets/iconSocials/facebook.png" alt="#"></li>
    <li class="ot6__item"><img class="ot6__img" src="@/assets/componets/iconSocials/instagram.png" alt="#"></li>
    <li class="ot6__item"><img class="ot6__img" src="@/assets/componets/iconSocials/youtybe.png" alt="#"></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'SocialIcons',
  props: {
    left: Boolean
  }
}
</script>

<style lang="scss">
// other
  .ot6{
    &__list{
      justify-content: space-between;
    }
    &__item{
      margin: 0 0.5em;

    }
    &__img{
      transition: 0.2s;
      &:hover{
        transform: scale(1.07);
      }
    }
  }
  .ot6__list--left{
    justify-content: left;
  }
</style>
