<template>
    <section class="ip2">
        <div class="ip2__content --flex --space-betwen">
            <div class="ip2__specification">
                <h3 class="ip2__title">Описание</h3>
                <div class="decor-line mb-200"></div>
                <p class="ip2__text">{{ description }}</p>
            </div>
            <div class="ip2__reviews">
                <h3 class="ip2__title">Отзывы</h3>
                <div class="ip2__bt-control">
                    <ButtonArround @click="prevItems" :class="{ disabled: offSet === 0 }" class="ip2__bt-arrow"/>
                    <ButtonArround @click="nextItems" :class="{ disabled: this.index === 0 }" class="ip2__bt-arrow-prev"/>
                </div>
                <div class="decor-line mb-200"></div>
                <div class="ip2__sla" v-if="this.data.length !== 0">
                    <div class="ip2__sla-container --flex" :style="{ 'margin-left': '-' + (100 * offSet) + '%'}" ref="cont">
                         <div class="ip2__sla-item" v-for="item in data" :key="item" :style="{ 'width': containerSize + 'px' }">
                         <div class="ip2__sla-item-cont">
                            <img :src="item.img" :alt="item.name" class="mb-125">
                            <h4 class="ip2__sla-name">{{ item.name }}</h4>
                            <Ranting class="ip2__sla-star" :rantingNuumber="item.ranting"/>
                            <p class="ip2__text ">{{item.text}}</p>
                         </div>
                        </div>
                    </div>
                </div>
                <p v-else class="ip2__text-lack-information">На этот товар, пока нет отзывов</p>
            </div>
        </div>
    </section>
</template>
<script>
import ButtonArround from '@/components/Button/ButtonArround.vue'
import Ranting from '@/components/Other/Ranting.vue'
import { nextSlade, prewSlade } from '@/basicLogicJS/Slader/Slader'

export default {
  name: 'ItemReviews',
  props: {
    data: Array,
    description: String
  },
  data () {
    return {
      offSet: 0,
      numberSlades: 1,
      containerSize: 0
    }
  },
  mounted () {
    this.containerSize = this.$refs.cont?.clientWidth
    window.addEventListener('resize', () => {
      this.containerSize = this.$refs.cont?.clientWidth
    })
  },
  computed: {
    index () {
      return this.data.length - this.offSet - 1
    }
  },
  methods: {
    prevItems () {
      this.offSet = prewSlade(this.offSet)
    },
    nextItems () {
      this.offSet = nextSlade(this.data, this.offSet, this.numberSlades)
    }
  },
  components: { ButtonArround, Ranting }
}
</script>
<style lang="scss">
// if - iformation on product
// cont - content
.ip2{
    &__specification,
    &__reviews{
        width: 50%;
        padding: 2rem;
        text-align: left;
        background-color: var(--color-lite-gray);
        border-radius: var(--border-radius-3px);
    }
    &__title{
        margin-bottom: 2rem;
        font-size: 1.5rem;
        line-height: var(--text-line-height);
    }
    &__text{
        font-size: 1.25rem;
        line-height: inherit;
        color: var(--color-gray);
        line-height: var(--text-line-height);
    }
    &__reviews{
        position: relative;
    }
    &__bt-control{
        position: absolute;
        top: 1.75rem;
        right: 1.75rem;
    }
    &__bt-arrow{
        transform: scale(0.7);
    }
    &__bt-arrow-prev{
        transform: rotate(180deg) scale(0.7);
    }
    &__text-lack-information{
        font-size: 1.5rem;
        line-height: var(--text-line-height);
        color: var(--color-dark-gray);
    }
    // slader
    &__sla{
        overflow: hidden;
    }
    &__sla-container{
        transition: all ease 0.4s;
    }
    &__sla-item{
        flex-shrink: 0;
    }
    &__sla-item-cont{
        position: relative;
    }
    &__sla-name{
        font-size: 1.125rem;
        display: inline-block;
        padding-left: 0.625rem;
        line-height: 70px;
        vertical-align: top;
    }
    &__sla-star{
        position: absolute;
        transform: translateY(-50%) scale(0.8);
        right: -10px;
        top: 35px;
    }
}
@media screen and (max-width: 1000px) {
    .ip2{
        &__content{
            flex-wrap: wrap;
        }
        &__specification,
        &__reviews{
            width: 100%;
        }
        &__specification{
            margin-bottom: 1rem;
        }
    }
}
@media screen and (max-width: 600px) {
    .ip2{
        &__specification,
        &__reviews{
            padding: 1rem;
        }
        &__text{
            font-size: 1rem;
        }
        &__title{
            margin-bottom: 1.5rem;
        }
        &__bt-control{
            top: 1rem;
            right: 0.75rem;
        }
        &__text-lack-information{
            font-size: 1.25rem;
        }
    }
}
</style>
