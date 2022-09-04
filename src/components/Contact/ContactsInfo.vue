<template>
<section class="с3__contacts">
  <div class="c3__content --flex">
    <div class="c3__numder">
      <h3 class="c3__title">Для связи</h3>
      <ul class="c3__info">
        <li class="c3__item">
            <div class="c3__item-img">
                <img src="@/assets/componets/icons/phone-outline.png" alt="phone">
            </div>
          <p class="c3__item-cont --inline-block text-18">8-(495)-005-52-15</p>
        </li>
        <li class="c3__item">
            <div class="c3__item-img">
                <img src="@/assets/componets/icons/Layer.png" alt="mail">
            </div>
          <p class="c3__item-cont --inline-block text-18">info@5kvt.ru</p>
        </li>
      </ul>
      <h3 class="c3__title">Социальные сети</h3>
      <SocialIcons :left="true"/>
    </div>
    <div class="c3__props">
        <h3 class="c3__title">Реквизиты</h3>
        <ul class="c3__props-list">
            <li class="c3__props-item --flex --space-betwen" v-for="(item, index) in requisites" :key="index">
                <p >{{ item.name }}</p>
                <p >{{ item.numder }}</p>
            </li>
        </ul>
    </div>
  </div>
</section>
</template>

<script>
import SocialIcons from '@/components/Other/SocialIcons.vue'
export default {
  name: 'ContactInfo',
  data () {
    return {
      requisites: [
        { name: 'ИП Агасян Владимир Артурови', numder: 'ОГРНИП: 320508100021612' },
        { name: 'ИП Агасян Владимир Артурови', numder: 'ОГРНИП: 320508100021612' },
        { name: 'ИП Агасян Владимир Артурови', numder: 'ОГРНИП: 320508100021612' },
        { name: 'ИП Агасян Владимир Артурови', numder: 'ОГРНИП: 320508100021612' }
      ]
    }
  },
  components: { SocialIcons }
}
</script>
<style lang="scss">
// c- contacts
.c3{
  &__contacts{
    text-align: left;
  }
    &__title{
        margin-bottom: 2rem;
        font-size: 1.5rem;
        line-height: var(--text-line-height);
        color: var(--color-dark-gray);
    }
    &__numder{
        width: 40%;
    }
    &__info{
        margin-bottom: 3.125rem;
    }
    &__item{
        width: 50%;
        display: inline-block;
    }
    &__item-img{
        width: 30px;
        height: 30px;
        box-shadow: 1px 4px 6px -2px var(--color-gray);
        padding: 0.375rem;
        margin-right: 1.25rem;
        background-color: var(--color-white);
        display: inline-block;
        border-radius: var(--border-radius-50per);
    }
    &__item-cont{
        vertical-align: super;
    }
    &__props{
      background-color: var(--color-lite-gray);
        width: 60%;
        padding: 2rem;
    }
    &__props-item{
      &:not(&:last-child) {
          margin-bottom: 2rem;
      }
    }
}
@media screen and (max-width: 1200px) {
  .c3__item {
    width: 100%;
    margin-bottom: 1rem;
  }
}
@media screen and (max-width: 920px){
  .c3{
    &__content {
      flex-wrap: wrap;
    }
    &__numder{
      width: 100%;
      margin-bottom: 2rem;
    }
    &__props{
      width: 100%;
      background: none;
      padding: 0;
    }
  }
}
@media screen and (max-width: 560px) {
  .c3{
    &__props-item{
      flex-wrap: wrap;
      &:not(&:last-child){
        margin-bottom: 1rem;
      }
      & p {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
    &__title,
    &__numder{
      margin-bottom: 1.5rem;
    }
  }
}
</style>
