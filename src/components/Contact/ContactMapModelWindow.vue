<template>
    <div class="c1__mw bg--white br--3px" :class="{active: !active}">
      <div class="c1__cont">
        <IconClose class="c1__bt-close" @click="this.userMask = false" :class="{active: !active}"/>
        <ul class="c1__info">
          <li class="c1__item bg--lite-gray --flex --space-betwen">
            <p class="c1__cat-name text-24 --bold --dark-gray">Адрес</p>
            <p class="c1__cat-name  text-24 --bold --dark-gray">Режим работы</p>
          </li>
          <li class="c1__item" v-for="(item, index) in data" :key="index">
            <div class="c1__item-cont --flex --space-betwen">
              <p class="c1__item-info-shop">{{ item.addres}}</p>
              <p class="c1__work-hours">
                <span class="c1__work-hours--sp --blue">Понедельник</span> - суббота с <span class="c1__work-hours--sp  --gray">{{ item.hoursFrom }}</span>  до <span class="c1__work-hours--sp  --gray">{{ item.hoursTo }}</span><br/>
                <span class="c1__work-hours--sp --yellow">Воскресенье</span> - <span class="c1__work-hours--sp  --gray ">{{ item.weeekend }}</span>
              </p>
            </div>
            <div class="decor-line"></div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { inject } from 'vue'
import IconClose from '@/components/Icons/IconClose.vue'
export default {
  name: 'ContactMapModelWindow',
  props: {
    active: Boolean,
    data: Object
  },
  setup () {
    const userMask = inject('mask')
    return {
      userMask
    }
  },
  components: { IconClose }
}
</script>
<style lang="scss">
// c - contacts
.c1{
  &__mw{
    position: absolute;
    padding: 2.5rem;
    top: -20px;
    z-index: 900;
    transform-origin: 50px 0;
    transition: 0.3s;
    &.active{
      transform: scaleX(0.24) scaleY(0.08);
      transition-delay: 0.2s;
      top: 30px;
      opacity: 0;
      z-index: 600;
    }
  }
  &__cont{
    position: relative;
  }
  &__item{
    padding: 0.75rem 1.25rem
  }
  &__info{
    padding-top: 6.25rem;
  }
  &__item-cont{
    padding: 1.25rem;
  }
  &__item-info-shop{
    width: 60%;
    font-size: 1.125rem;
    line-height: var(--text-line-height);
  }
  &__work-hours,
  &__work-hours--sp{
    text-align: right;
    font-size: var(--text-size-18);
    line-height: var(--text-line-height);
  }
  &__bt-close{
  position: absolute;
  right: 40px;
  top: 20px;
  height: 22px;
  width: 22px;
  cursor: pointer;
  }
}
@media screen and (max-width: 1200px) {
  .c1{
    &__mw{
      padding: 1.75rem;
    }
    &__item{
      padding: 0.5rem;
    }
    &__info{
      padding-top: 5rem;
    }
    &__item-info-shop,
    &__work-hours,
    &__work-hours--sp{
      font-size: 1rem;
    }
    &__item-info-shop{
      width: 55%;
    }
    &__item-cont{
    padding: 0.75rem 0;
    }
  }
}
</style>
