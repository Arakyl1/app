<template>
  <div class="ot5 --flex --space-betwen" >
    <IconStar class="ot5__star" @click="$emit('ranting', 1)"/>
    <IconStar class="ot5__star" @click="$emit('ranting', 2)"/>
    <IconStar class="ot5__star" @click="$emit('ranting', 3)"/>
    <IconStar class="ot5__star" @click="$emit('ranting', 4)"/>
    <IconStar class="ot5__star" @click="$emit('ranting', 5)"/>
  </div>
</template>
<script>
import IconStar from '@/components/Icons/IconStar.vue'

export default {
  name: 'BasicRanting',
  emits: ['ranting'],
  data () {
    return {
      arrayStar: []
    }
  },
  props: {
    rantingNuumber: [String, Number]
  },
  mounted () {
    this.arrayStar = Array.from(this.$el.querySelectorAll('.ot5__star'))
    if (this.rantingNuumber !== 0) {
      this.activeStar((this.rantingNuumber - 1))
    }
  },
  methods: {
    activeStar (number) {
      for (let i = 0; i < this.arrayStar.length; i++) {
        const element = this.arrayStar[i]
        if (i <= number) {
          element.classList.add('active')
        } else {
          element.classList.remove('active')
        }
      }
    }
  },
  watch: {
    rantingNuumber () {
      this.activeStar(this.rantingNuumber - 1)
    }
  },
  components: { IconStar }
}
</script>
