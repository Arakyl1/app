<template>
  <div class="st2m__cont">
    <div class="st2m__item">
        <p class="st2m__number">+7 (499) 719-99-94</p>
        <p class="st2m__text">Ежедневно 9:30 - 20:00 (МСК)</p>
        <p class="st2m__text rigth">info@5kvt.ru</p>
        <p class="mb-150 --gray">117218, г. Москва, пр-кт Нахимовский .,дом 30/43, кв. 81</p>
    </div>
    <div class="decor-line"></div>
    <FooterInfoListMobaile :url="'info'"/>
    <FooterInfoListMobaile :url="'infoSupport'" :title="'Служба поддержки'"/>
    <FooterInfoListMobaile :url="'infoUser'" :title="'Личный кабинет'"/>
    <div class="spacer--30px"></div>
    <div class="st2m__item">
      <div class="mb-200">
          <a href="#" class="mb-0625"><img class="sst2m__link-img" src="@/assets/componets/icons/whatsApp.png" alt="WhatsApp"></a>
          <a href="" class="ml-1 mb-0625"><img class="st2m__link-img" src="@/assets/componets/icons/vider.png" alt="Viber"></a>
          <p class="st2m__item-span --dark-gray">Напишите нам</p>
      </div>
    </div>
    <button class="st2m__bt-suport mb-200">
        <img class="st2m__bt-suport-img" src="@/assets/componets/icons/user.png" alt="User">
        Служба поддержки
    </button>
    <h3 class="st2b__title mb-200">Принимаем к оплате</h3>
    <div>
        <img class="st2m__card-img" src="@/assets/componets/icons/masterCard.png" alt="masterCard">
        <img class="st2m__card-img" src="@/assets/componets/icons/maestro.png" alt="maestro">
        <img class="st2m__card-img" src="@/assets/componets/icons/visa.png" alt="visa">
        <img class="st2m__card-img" src="@/assets/componets/icons/mir.png" alt="mir">
    </div>
</div>
</template>
<script>
import FooterInfoListMobaile from './FooterInfoListMobaile.vue'

export default {
  name: 'FooterMobaile',
  components: { FooterInfoListMobaile }
}
</script>
<style lang="scss">
.st2m{
  &__cont{
    padding: 2rem 0;
  }
  &__number{
    text-align: right;
    color: var(--color-white);
    margin-bottom: 1.5rem;
  }
  &__text{
    display: inline-block;
    color: var(--color-white);
    margin-bottom: 1.5rem;
    &.rigth{
      float: right;
    }
  }
  &__item-span{
    margin-left: 1rem;
    display: inline-block;
    vertical-align: super;
  }
  &__bt-suport{
    width: 100%;
    padding: 1rem;
    background-color: var(--color-blue);
    border-radius: var(--border-radius-3px);
    color: var(--color-white);
  }
  &__bt-suport-img{
    vertical-align: sub;
    margin-right: 0.5rem;
  }
  &__card-img{
    margin-right: 0.5rem;
  }
}
</style>
