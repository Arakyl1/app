<template>
    <div class="st2b__cont --flex">
        <div class="st2b__item">
            <img class="mb-150" src="@/assets/componets/logo.png" alt="logo">
            <p class="mb-125 --white">+7 (499) 719-99-94</p>
            <p class="mb-125 --white">info@5kvt.ru</p>
            <p class="mb-125 --white">Ежедневно 9:30 - 20:00 (МСК)</p>
            <p class="mb-125 --gray">117218, г. Москва, пр-кт Нахимовский .,дом 30/43, кв. 81</p>
        </div>
        <div class="st2b__item">
            <FooterInfoListStandart :url="'info'" :title="'Информация'"/>
        </div>
        <div class="st2b__item">
            <FooterInfoListStandart :url="'infoSupport'" :title="'Служба поддержки'"/>
            <FooterInfoListStandart :url="'infoUser'" :title="'Личный кабинет'"/>
        </div>
        <div class="st2b__item">
            <div class="mb-200">
                <a href="#" class="mb-0625"><img class="st2b__link-img" src="@/assets/componets/icons/whatsApp.png" alt="WhatsApp"></a>
                <a href="" class="ml-1 mb-0625"><img class="st2b__link-img" src="@/assets/componets/icons/vider.png" alt="Viber"></a>
                <span class="st2b__item-span text-16 --dark-gray">Напишите нам</span>
            </div>
            <button class="st2b__bt-suport">
                <img class="st2b__bt-suport-img" src="@/assets/componets/icons/user.png" alt="User">
                Служба поддержки
            </button>
            <h3 class="st2b__title">Принимаем к оплате</h3>
            <div>
                <img class="st2b__card-img" src="@/assets/componets/icons/masterCard.png" alt="masterCard">
                <img class="st2b__card-img" src="@/assets/componets/icons/maestro.png" alt="maestro">
                <img class="st2b__card-img" src="@/assets/componets/icons/visa.png" alt="visa">
                <img class="st2b__card-img" src="@/assets/componets/icons/mir.png" alt="mir">
            </div>
        </div>
    </div>
</template>

<script>
import FooterInfoListStandart from './FooterInfoListStandart.vue'

export default {
  name: 'FooterStandart',
  components: { FooterInfoListStandart }
}
</script>

<style lang="scss">
// st - standart
// cont - content
.st2b{
    padding-bottom: 3.125rem;
    &__cont{
        padding-top: 2.75rem;
    }
    &__item{
        text-align: left;
        width: 25%;
        padding-bottom: 3.125rem;
        &:first-child{
            padding-right: 5rem;
        }
    }
    &__title{
        margin-bottom: 1rem;
        color: var(--color-white);
        font-size: var(--text-size-18);
        line-height: var(--text-line-height);
    }
    &__card-img{
        margin-right: 0.625rem;
    }
    &__link-img {
        vertical-align: middle;
    }
    &__item-span{
        padding-left: 0.625rem;
    }
    &__bt-suport{
        padding: 1.125rem 2.75rem;
        margin-bottom: 2rem;
        color: var(--color-white);
        border-radius: var( --border-radius-3px);
        background-color: var(--color-blue);
    }
    &__bt-suport-img{
        vertical-align: text-bottom;
    }
}
@media screen and (max-width: 1200px) {
    .st2b__item:first-child{
        padding-right: 2rem;
    }
    .st2b__item:last-child{
        max-width: 30%;
        width: 100%;
    }
}
</style>
