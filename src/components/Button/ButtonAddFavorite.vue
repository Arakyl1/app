<template>
    <button :class="{ active: this.checkActiveFavoriteItem }" @click="addItemFavorite">
        <IconLike/>
    </button>
</template>

<script>
import IconLike from '@/components/Icons/IconLike.vue'
import { inject } from 'vue'
export default {
  name: 'ButtonAddFavorite',
  props: {
    id: Number
  },
  setup () {
    const favoriteItems = inject('favoriteItems')
    return {
      favoriteItems
    }
  },
  computed: {
    checkActiveFavoriteItem () {
      return !!this.favoriteItems.find(el => el.id === this.id)
    }
  },
  methods: {
    addItemFavorite () {
      if (!this.checkActiveFavoriteItem) {
        this.favoriteItems.push({ id: this.id })
      } else {
        const index = this.favoriteItems.findIndex(el => el.id === this.id)
        this.favoriteItems.splice(index, 1)
      }
      console.log(this.favoriteItems)
    }
  },
  components: { IconLike }
}
</script>
