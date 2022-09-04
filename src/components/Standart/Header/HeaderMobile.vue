<template>
<div class="st3m">
    <div class="content">
            <div class="st3m__cont">
                <router-link :to="{ name: 'home'}" class="st3m__logo"><img src="@/assets/componets/logo.png" alt="logo"></router-link>
                <IconStatic class="st3m__item"/>
                <router-link to="/add" class="st3m__item"><IconAddItem/></router-link>
                <ButtonShowFavorite class="st3m__item"/>
                <ButtonBasketHeader class="st3m__item"/>
                <ButtonUser class="st3m__item st3m__item-user"/>
                <ButtonMenuMobaile class="st3m__item" @click="showMenu"/>
            </div>
            <div class="decor-line mtb-1"></div>
            <ul class="st3m__list">
                <li class="st3m__info">
                    <img class="st3m__img-info" src="@/assets/componets/icons/phone-outline.png" alt="Phone">
                    <p class="st3m__text --inline-block">8-(495)-005-52-15</p>
                </li>
                <li class="st3m__info">
                    <img class="st3m__img-info" src="@/assets/componets/icons/Layer.png" alt="Email">
                    <p class="st3m__text --inline-block">info@5kvt.ru</p>
                </li>
            </ul>
            <div class="spacer--20px"></div>
            <form class="st3m__search">
                <input type="text" class="st3m__input" placeholder="Поиск" v-model="search">
                <IconSearch class="st3m__img-search"/>
            </form>
    </div>
    <div class="st3m__menu" :class="{ active: this.menuActive }">
        <img src="@/assets/componets/icons/logo-mobaile.svg" alt="logo" class="mb-100">
        <IconClose class="st3m__icons-close" @click="showMenu"/>
        <ul class="st3m__menu-list" v-if="!subCategot">
            <SelectMenuItems @show-subcategor="showSubCategot"/>
        </ul>
        <ul v-else>
            <SelectMenuRigntItems v-for="item in subCategot" :key="item.name" :title="item.name" :children="item.children"/>
        </ul>
    </div>
</div>
</template>
<script>
import IconStatic from '@/components/Icons/IconStatic.vue'
import ButtonShowFavorite from '@/components/Button/ButtonShowFavorite.vue'
import ButtonBasketHeader from '@/components/Button/ButtonBasketHeader.vue'
import ButtonUser from '@/components/Button/ButtonUser.vue'
import ButtonMenuMobaile from '@/components/Button/ButtonMenuMobaile.vue'
import Api from '@/Api/API'
import SelectMenuItems from '../SelectMenu/selectMenuItems.vue'
import IconClose from '@/components/Icons/IconClose.vue'
import IconSearch from '@/components/Icons/IconSearch.vue'
import IconAddItem from '@/components/Icons/IconAddItem.vue'
import SelectMenuRigntItems from '../SelectMenu/selectMenuRigntItems.vue'
export default {
  name: 'HeaderMobile',
  data () {
    return {
      menuActive: false,
      selectMenu: [],
      search: '',
      subCategot: null
    }
  },
  created () {
    Api.GetSelctMenu().then(res => { this.selectMenu = res[0].children })
  },
  methods: {
    showMenu () {
      this.menuActive = !this.menuActive
    },
    showSubCategot (e) {
      this.subCategot = e
    }
  },
  watch: {
    $route () {
      this.search = ''
      this.menuActive = false
      this.subCategot = null
    }
  },
  components: { IconStatic, ButtonShowFavorite, ButtonBasketHeader, ButtonUser, ButtonMenuMobaile, SelectMenuItems, IconClose, IconSearch, IconAddItem, SelectMenuRigntItems }
}
</script>
<style lang="scss">
.st3m{
    padding-top: 3rem;
    &__cont{
        text-align: right;
        align-items: center;
    }
    &__item{
        margin-left: 2rem;
        background: none;
        display: inline-block;
    }
    &__item-user{
        height: 37px;
    }
    &__logo{
        float: left;
    }
    &__list{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__img-info{
        vertical-align: bottom;
        margin-right: 0.5rem;
    }
    &__info{
        display: inline-block;
    }
    &__menu{
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: var(--color-blue);
        z-index: 802;
        top: 0;
        left: 0;
        transform: translateX(110%);
        transition: all ease 0.3s;
        padding: 3rem 1rem;
        &.active{
            transform: translate(0);
        }
    }
    &__icons-close{
        float: right;
    }
    &__search{
        position: relative;
    }
    &__input{
        padding: 0.625rem;
        background-color: var(--color-lite-gray);
        border-radius: var(--border-radius-3px);
        width: 100%;
    }
    &__img-search{
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
    }
    &__menu-list .st4-1__bt-catalog {
        position: relative;
        transform: scale(1);
        opacity: 1;
    }
}
.icons__close.st3m__icons-close path {
    fill: var(--color-white);
}
.st4-1__item {
    padding: 1rem 0;
}
@media screen and (max-width: 570px) {
   .st3m__item{
    margin-left: 0;
   }
   .st3m__cont{
    display: flex;
    justify-content: space-between;
   }
}
@media screen and (max-width: 450px) {
    .st3m{
        padding-top: 2rem;
        &__logo img{
            width: 100px;
        }
    }
}
</style>
