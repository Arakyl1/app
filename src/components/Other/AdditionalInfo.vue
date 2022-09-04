<template>
    <div class="ot1">
        <h2 class="ot1__title">{{ title}}</h2>
        <div class="ot1__sla">
          <div class="ot1__container" :style="{ 'margin-left': '-' + (100 * paigeNumber) + '%'}">
        <div class="ot1__item" v-for="item in urlImage" :key="item.title">
            <div class="ot1__cont">
                <img :src="item.img" :alt="item.title" class="ot1__img">
                <h4 class="ot1__item-title text-18">{{ item.title }}</h4>
                <p class="ot1__item-text --dark-gray">{{ item.text }}</p>
            </div>
        </div>
      </div>
      </div>
      <ul class="ot1__bt-control">
          <li class="item-circular-control" v-for="(item, index) in urlImage.length"
          :key="index"
          :class="{ active: index === (this.paigeNumber) }"
          @click="this.paigeNumber = index"></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'OtherAdditionalInfo',
  props: {
    title: String
  },
  data () {
    return {
      urlImage: [
        { title: 'Удобная доставка 24/7', text: 'Мы работаем с проверенными транспортными компаниями', img: 'https://im.wampi.ru/2022/07/29/177c6882fa61448bf.png' },
        { title: 'Оплата любым способом', text: '7 способов оплаты для вашего удобства', img: 'https://im.wampi.ru/2022/07/29/2e2de38fd4365f56b.png' },
        { title: 'Гарантия качества', text: 'Перед покупкой мы надежно проверяем товар', img: 'https://ic.wampi.ru/2022/07/29/3e044aa055a51c8dd.png' },
        { title: 'Онлайн поддержка', text: 'Менеджеры оперативно ответят на звонок или заявку', img: 'https://ic.wampi.ru/2022/07/29/48ea45f0c13c64122.png' }
      ],
      paigeNumber: 0,
      windowSize: 0
    }
  },
  mounted () {
    this.windowSize = window.innerWidth
    window.addEventListener('resize', () => { this.windowSize = window.innerWidth })
  },
  watch: {
    windowSize () {
      if (this.windowSize > 560) {
        this.paigeNumber = 0
      }
    }
  }
}

</script>

<style lang="scss">
.ot1{
    &__title{
        text-align: left;
        margin-bottom: 4.375rem;
        font-size: 2.25rem;
        line-height: var(--text-line-height);
    }
    &__sla{
      margin: 0 -1rem;
      overflow: hidden;
    }
    &__container{
      display: flex;
      justify-content: space-between;
      margin-left: 0;
    }
    &__cont{
      padding: 2rem 1rem;
      text-align: center;
      background-color: var(--color-lite-gray);
      border-radius: var(--border-radius-3px);
      height: 100%;
    }
    &__item{
        width: 25%;
        padding: 0 1rem;
    }
    &__img {
        margin-bottom: 2rem;
    }
    &__item-title{
        margin-bottom: 1.25rem;
    }
    &__bt-control{
      display: none;
      text-align: center;
    }
}
@media screen and (max-width: 920px) {
  .ot1{
    &__container{
      flex-wrap: wrap;
      margin-left: 0;
    }
    &__item{
        width: 50%;
        margin-bottom: 2rem;
    }
  }
}
@media screen and (max-width: 560px) {
.ot1{
  &__title{
    font-size: 1.75rem;
  }
  &__container{
      flex-wrap: nowrap;
      margin-bottom: 2rem;
      transition: all ease 0.3s;
  }
  &__sla{
    width: 100vw;
    margin: 0 -0.5rem;
  }
  &__item{
    flex-grow: 1;
    flex-shrink: 0;
    width: calc(100vw);
    margin-bottom: 0;
    padding: 0 0.5rem;
  }
  &__bt-control{
    display: block;
  }
}
}
</style>
