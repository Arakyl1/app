<template>
<div v-if="data">
    <h3 class="st2b__title">{{ this.title }}</h3>
    <ul class="mb-1625">
        <li class="mb-0625" v-for=" item in data" :key="item?.name">
            <router-link v-if="item.name" class="--gray" :to="{ path: item?.href, query: item?.href === '/items' ? {page:  1} : '' }">{{ item.name }}</router-link>
            <p v-else class="--gray">{{ item }}</p>
        </li>
    </ul>
</div>
</template>

<script>
import Api from '@/Api/API'

export default {
  name: 'FoterInfoListStandart',
  props: {
    url: String,
    title: {
      type: String,
      default: 'Информация'
    }
  },
  data () {
    return {
      data: null
    }
  },
  created () {
    Api.GetFooterInfo(this.url).then(res => { this.data = res })
  }
}
</script>
