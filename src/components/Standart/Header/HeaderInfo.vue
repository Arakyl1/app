<template>
  <div class="st3-1 --flex --space-betwen">
    <router-link to="/"
      ><img class="st3-1__logo" src="@/assets/componets/logo.png" alt="logo"
    /></router-link>
    <p class="st3-1__number text-24 --bold">{{ numderMarket }}</p>
    <form class="st3-1__form br--3px">
      <input class="st3-1__input" type="text" placeholder="Что ищем?" />
      <button class="st3-1__bt-form br--3px --white">Поиск</button>
    </form>
    <SocialIcons class="st3-1__social-icons"/>
    <router-link
      to="/contact"
      class="st3-1__bt-adres br--3px --white"
      >Адреса магазинов</router-link>
    <ButtonUser class="st3-1__bt-user"/>
  </div>
</template>

<script>
import SocialIcons from '@/components/Other/SocialIcons.vue'
import ButtonUser from '@/components/Button/ButtonUser.vue'

export default {
  name: 'HeaderInfo',
  data () {
    return {
      numderMarket: '+7 (499) 719-99-94'
    }
  },
  components: { SocialIcons, ButtonUser }
}
</script>

<style lang="scss">
.st3-1{
  align-items: center;
  padding: 1rem 0;
  &__form {
    position: relative;
    height: 37px;
    max-width: 300px;
    width: 100%;
    border: 1px solid var(--color-gray);
  }
  &__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 75%;
    height: 100%;
    padding: 0.3125rem;
  }
  &__bt-form {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 5px;
    height: 27px;
    min-width: 66px;
    background-color: var(--color-blue);
    cursor: pointer;
  }
  &__bt-adres {
    max-width: 165px;
    padding: 0.625rem 0.875rem;
    transition: 0.3s;
    background-color: var(--color-yellow);
    &:hover {
      transform: scale(1.01);
    }
  }
}
@media screen and (max-width: 1200px) {
  .st3-1{
  &__logo{
    width: 90px;
  }
  &__number.text-24{
    font-size: var(--text-size-18);
    line-height: var(--text-line-height);
  }
  &__form{
    max-width: 200px;
  }
  &__input{
    width: 60%;
  }
  }
}
@media screen and (max-width: 980px) {
  .st3-1__logo,
  .st3-1__bt-user,
  .st3-1__social-icons,
  .st3-1__bt-adres,
  .st3-1__form {
    display: none;
  }
}
</style>
