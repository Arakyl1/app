<template>
<section class="c2__addres">
  <div class="c2__sla" ref="cont">
    <div class="c2__cont">
      <div class="c2__items --flex --space-betwen" :style="{ 'margin-left': '-' + (100 * sladerIndex) + '%'}">
        <div class="c2__item" v-for="item in data" :key="item.addres" :style="{ 'width': (itemSize / this.quantityItemSlader) + 'px',  }">
          <img :src="item.img" :alt="item.addres" class="c2__img">
          <p class="c2__text text-18">{{ item.addres}}</p>
        </div>
      </div>
    </div>
      <ButtonArround class="c2__control c2__bt-arrow-prew" :class="{ disabled: this.sladerIndex === 0 }" @click="prewItem " v-if="this.itemSize >= 620"/>
      <ButtonArround class="c2__control c2__bt-arrow-next" :class="{ disabled: this.numberSlader === 0 }" @click="nextItem" v-if="this.itemSize >= 620"/>
      <ul v-else class="c2__control-mobaile">
        <li class="item-circular-control" v-for="(item, index) in data.length"
        :key="index"
        :class="{ active: index === (this.sladerIndex) }"
        @click="this.sladerIndex = index"></li>
    </ul>
  </div>
</section>
</template>

<script>
import { nextSlade, prewSlade } from '@/basicLogicJS/Slader/Slader'
import ButtonArround from '@/components/Button/ButtonArround.vue'

export default {
  name: 'ContactAdresses',
  props: {
    data: Array
  },
  data () {
    return {
      sladerIndex: 0,
      itemSize: 0
    }
  },
  mounted () {
    this.itemSize = this.$refs.cont?.clientWidth
    window.addEventListener('resize', () => {
      this.itemSize = this.$refs.cont?.clientWidth
    })
  },
  computed: {
    numberSlader () {
      return (this.data.length / this.quantityItemSlader) - this.sladerIndex - 1
    },
    quantityItemSlader () {
      return this.itemSize < 620 ? 1 : this.itemSize < 920 ? 2 : 3
    }
  },
  methods: {
    nextItem () {
      this.sladerIndex = nextSlade(this.data, this.sladerIndex, this.quantityItemSlader)
    },
    prewItem () {
      this.sladerIndex = prewSlade(this.sladerIndex)
    }
  },
  components: { ButtonArround }
}
</script>

<style lang="scss">
// c - contacts
.c2{
  &__addres{
  margin: -1rem;
  padding: 1rem 0;
  }
  &__sla{
  position: relative;
  }
  &__cont{
    overflow: hidden;
  }
  &__items{
    transition: all ease 0.5s;
  }
  &__item{
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0 1rem;
  }
  &__img{
    width: 100%;
  }
  &__control{
    position: absolute;
  }
  &__text{
    padding-top: 1.25rem;
    text-align: left;
  }
  &__bt-arrow-prew{
  left: -7px;
  top: 35%;
  transition: all ease 0.3s;
  &:hover{
    left: -4px;
    }
  }
  &__bt-arrow-next{
  right: -7px;
  top: 35%;
  transform: scale(-1);
  transition: all ease 0.3s;
  &:hover{
    right: -4px;
    }
  }
  &__control-mobaile{
    text-align: center;
    margin: 1rem 0;
  }
}
@media screen and (max-width: 1200px) {
  .c2__bt-arrow-prew{
    left: 25px;
    &:hover{
    left: 20px;
    }
  }
  .c2__bt-arrow-next{
    right: 25px;
    &:hover{
    right: 20px;
    }
  }
}
</style>
