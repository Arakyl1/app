<template>
    <div class="st2-1m__item" v-if="data">
      <h3 class="st2-1m__title">{{ this.title }}</h3>
      <IconPlus @click="dataActive = !dataActive" class="st2-1m__bt-show"/>
      <ul class="mb-1625" v-if="dataActive">
        <li class="mb-0625" v-for=" item in data" :key="item?.name">
            <router-link v-if="item.href" class="--gray" :to="{ path: item?.href, query: { page: item?.href === '/items' ? 1 : '' }}">{{ item?.name }}</router-link>
            <p v-else class="--gray">{{ item }}</p>
        </li>
      </ul>
      <div class="decor-line"></div>
    </div>
</template>
<script>
import Api from '@/Api/API'
import IconPlus from '@/components/Icons/IconPlus.vue'

export default {
  name: 'FooterInfoListMobaile',
  props: {
    url: String,
    title: {
      type: String,
      default: 'Информация'
    }
  },
  data () {
    return {
      data: null,
      dataActive: false
    }
  },
  created () {
    Api.GetFooterInfo(this.url).then(res => { this.data = res })
  },
  watch: {
    $route () {
      this.dataActive = false
    }
  },
  components: { IconPlus }
}
</script>

<style lang="scss">
  .st2-1m{
    &__title{
      color: var(--color-white);
      display: inline-block;
      padding: 1rem 0;
      font-size: 1.125rem;
    }
    &__item{
      position: relative;
      width: 100%;
    }
    &__bt-show{
      position: absolute;
      right: 20px;
      top: 26px;
      transform: translateY(-50%);
    }
  }
</style>
