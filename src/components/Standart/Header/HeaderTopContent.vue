<template>
<div class="st3-2 bg--lite-gray">
  <div class="content">
    <div class="st3-2__cont --flex --space-betwen">
      <div>
        <router-link to="/contact" class="st3-2__link text-16">Контакты</router-link>
        <router-link to="/delivery" class="st3-2__link text-16">Доставка и оплата</router-link>
      </div>
      <div class="st3-2__info">
        <div class="st3-2__text-left --dark-gray">Построй и обустрой</div>
        <div class="st3-2__decor-circles"></div>
        <div class="st3-2__decor-circles"></div>
        <div class="st3-2__decor-circles"></div>
        <div class="st3-2__text-right">Всё для дома, дачи и стройки!</div>
      </div>
      <div class="--flex">
          <router-link to="/add" class="st3-2__bt"><IconAddItem /></router-link>
          <IconStatic class="st3-2__bt"/>
          <ButtonShowFavorite class="st3-2__bt"/>
          <ButtonBasketHeader class="st3-2__bt"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import IconStatic from '@/components/Icons/IconStatic.vue'
import IconAddItem from '@/components/Icons/IconAddItem.vue'
import ButtonShowFavorite from '@/components/Button/ButtonShowFavorite.vue'
import ButtonBasketHeader from '@/components/Button/ButtonBasketHeader.vue'
export default {
  name: 'HeaderTopContent',
  components: { IconStatic, IconAddItem, ButtonShowFavorite, ButtonBasketHeader }
}
</script>

<style lang="scss">
// h - header
// cont - content
  .st3-2{
    &__cont{
    padding: 0.75rem 0;
    align-items: center
    }
    &__link{
      &:not(:first-child){
        margin-left: 2rem
      }
    }
    &__info{
      align-items: center;
      display: flex;
    }
    &__text-left{
      margin-right: 0.5rem;
    }
    &__decor-circles{
      height: 4px;
      width: 4px;
      margin: 0 2px;
      background-color: var(--color-blue);
      border-radius: var(--border-radius-50per);
    }
    &__text-right{
      margin-left: 0.5rem;
    }
    &__bt{
      background: none;
      margin-right: 1.5rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
@media screen and (max-width: 980px) {
  .st3-2__info{
    display: none;
  }
}
</style>
