<template>
  <div class="co">
      <section class="c0__map">
        <h2 class="c0__title">Контакты</h2>
        <div class="spacer--67px m-24"></div>
        <p class="c0__working-hours">Часы работы и приёма звонков: Понедельник- суббота с 9:00 до 20:00 ,воскресенье-выходной</p>
        <div class="c0__con-map" ref="cont">
          <h3 v-if="mapSize > 728" class="c0__mw-title" @click="active = !active, this.userMask = !this.userMask" :class="{'text-18 --dark-gray active': !active}">Адреса для самовывоза</h3>
          <ContactMapModelWindow v-if="mapSize > 728" :active="this.active" :data="this.data" class="c0__map"/>
          <iframe :style="{ 'width': mapSize + 'px', 'height': (mapSize / 2.3) + 'px' }" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7d6a1168fb8d16752cf83dd4cf2d8e58a4e0a3813fc21288224711925e8cb0ab&amp;source=constructor" frameborder="0"></iframe>
        </div>
      </section>
      <div class="spacer--50px"></div>
      <ContactAdresses :data="this.data"/>
      <div class="spacer--50px"></div>
      <ContactsInfo/>
      <div class="spacer--100px m-32"></div>
  </div>
</template>

<script>
import { inject } from 'vue'
import ContactsInfo from '@/components/Contact/ContactsInfo.vue'
import ContactMapModelWindow from '@/components/Contact/ContactMapModelWindow.vue'
import ContactAdresses from '@/components/Contact/ContactAdresses.vue'
import Api from '@/Api/API'

export default {
  setup () {
    const userMask = inject('mask')
    return {
      userMask
    }
  },
  data () {
    return {
      data: [],
      active: false,
      mapSize: 0
    }
  },
  created () {
    Api.GetShopContact().then(res => { this.data = res })
  },
  mounted () {
    this.mapSize = this.$refs.cont?.clientWidth
    window.addEventListener('resize', () => {
      this.mapSize = this.$refs.cont?.clientWidth
    })
  },
  watch: {
    userMask () {
      if (!this.userMask && this.active) {
        this.active = false
      }
    }
  },
  components: { ContactsInfo, ContactMapModelWindow, ContactAdresses }
}
</script>

<style lang="scss">
// c - contacts
.c0{
  &__map{
  text-align: left;
  line-height: var(--text-line-height);
  }
  &__title{
    font-size: 2.25rem;
  }
  &__working-hours{
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  &__con-map{
    position: relative;
  }
  &__mw-title{
    font-size: 2.25rem;
    position: absolute;
    padding: 1.25rem;
    border-radius: var(--border-radius-3px);
    background-color: white;
    top: 20px;
    left: 40px;
    z-index: 999;
    transition: 0.4s;
    cursor: pointer;
    &.active{
      transition-delay: 0.3s;
      z-index: 700;
    }
  }
}
iframe {
  border-radius: var(--border-radius-3px);
}
@media screen and (max-width: 1200px){
  .c0__mw-title{
    font-size: 1.5rem;
    padding: 1rem;
  }
}
@media screen and (max-width: 760px){
  .spacer--100px.m-32{
    height: 32px;
  }
  .spacer--67px.m-24{
    height: 24px;
  }
  .c0__title{
    font-size: 1.5rem;
  }
  .c0__working-hours{
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
