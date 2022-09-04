<template>
    <section class="h1__sla" ref="cont">
        <div class="h1__items" :style="{ 'margin-left': '-' + (100 * sladerIndex) + '%' }">
            <div class="h1__item" v-for="item in data" :key="item.name" :style="{ 'width': widthSizeCont + 'px' }">
                <div class="h1__item-cont">
                    <img :src="(widthSizeCont < 710) ? item.img.small : item.img.big" :alt="item.title" class="h1__img">
                    <div class="h1__text">
                        <h3 class="h1__name" :style="{ 'color': item.color }">{{ item.title }}</h3>
                        <p class="h1__slogan --dark-gray">{{ item.slogan }}</p>
                        <div class="h1__control --flex" v-if="widthSizeCont >= 710">
                            <button class="h1__bt"><a href="#" class=" --white">Подробнее</a></button>
                            <ButtonArround class="h1__bt--sla" @click="prevItem"/>
                            <ButtonArround class="h1__bt--sla" @click="nextItem"/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
        <div class="h1__control --flex" v-if="widthSizeCont < 710">
            <button class="h1__bt bt--blue --white">Подробнее</button>
            <ButtonArround class="h1__bt--sla" @click="prevItem"/>
            <ButtonArround class="h1__bt--sla" @click="nextItem"/>
        </div>
    </section>
</template>

<script>
import Api from '@/Api/API'
import { nextSlade, prewSlade } from '@/basicLogicJS/Slader/Slader'
import ButtonArround from '@/components/Button/ButtonArround.vue'

export default {
  name: 'HomeSlader',
  data () {
    return {
      data: [],
      sladerIndex: 0,
      quantityItemSlader: 1,
      widthSizeCont: 0
    }
  },
  created () {
    Api.GetHomeSlader().then(res => { this.data = res })
  },
  mounted () {
    this.widthSizeCont = this.$refs.cont?.clientWidth
    window.addEventListener('resize', () => { this.widthSizeCont = this.$refs.cont?.clientWidth })
  },
  methods: {
    nextItem () {
      this.sladerIndex = nextSlade(this.data, this.sladerIndex, this.quantityItemSlader)
    },
    prevItem () {
      this.sladerIndex = prewSlade(this.sladerIndex)
    }
  },
  components: { ButtonArround }
}
</script>

<style lang="scss">
// h - home
// sla - slader
// cont - content
.h1{
  &__sla{
    overflow: hidden;
  }
  &__items{
    transition: all ease 0.5s;
    display: flex;
  }
  &__item{
    flex-grow: 1;
    flex-shrink: 0;
  }
  &__item-cont{
    position: relative;
    overflow: hidden;
    min-height: 500px;
  }
  &__img{
    position: absolute;
    bottom: 0;
    right: 0;
    width: auto;
    height: 100%;
  }
  &__name{
    font-size: 4rem;
    line-height: var(--text-line-height);
    font-weight: 900;
  }
  &__text{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 60%;
    max-height: 350px;
    padding-left: 6.125rem;
    text-align: left;
  }
  &__slogan{
    font-size: 1.5rem;
    line-height: var(--text-line-height);
    margin-top: 1rem;
  }
  &__control{
    margin-top: 2.625rem;
  }
  &__bt{
    min-width: 185px;
    margin-right: 0.375rem;
    padding: 1rem 0;
    vertical-align: middle;
    margin-right: 0.625rem;
    cursor: pointer;
    background-color: var(--color-blue);
    border-radius: var(--border-radius-3px);
  }
  &__bt--sla{
    height: 55px;
    width: 55px;
     margin-right: 0.375rem;
     &:last-child {
      margin-right: 0;
        transform: scale(-1);
     }
  }
}
@media screen and (max-width: 1200px) {
    .h1{
        &__name{
          font-size: 3rem;
        }
    }
}
@media screen and (max-width: 980px) {
    .h1{
        &__text{
          width: 70%;
        }
    }
}
@media screen and (max-width: 742px) {
  .h1{
    &__control{
      margin-top: 1rem;
      justify-content: right;
    }
    &__items{
      height: calc((100vw - 32px) * 1.52);
    }
    &__item-cont{
      height: 100%;
    }
    &__img{
      width: 100%;
      height: 100%
    }
    &__text{
      width: 100%;
      padding: 2rem 1rem;
      text-align: center;
      top: 25%;
    }
  }
}
@media screen and (max-width: 462px){
  .h1{
    &__bt{
      flex-grow: 1;
    }
    &__name{
      font-size: 2rem;
    }
    &__slogan{
      font-size: 1.125rem;
    }
  }
}
</style>
