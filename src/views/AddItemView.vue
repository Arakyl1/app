<template>
  <div class="ad0">
    <AddItemsMainInfo @main-data="addMainData" :create="create"/>
    <div class="spacer--30px"></div>
    <AddItemCharacteristic @characteristic="addCharecterictic" :create="create"/>
    <div class="spacer--30px"></div>
    <AddItemsAdditionalParameter @additional-parameter="addAdditionalPar" :create="create"/>
    <div class="spacer--30px"></div>
    <div class="ad0__cont-bt">
        <button class="bt bt--blue ad0__bt--add text-18" @click="createItems">Добавть товар</button>
    </div>
    <div class="spacer--50px"></div>
  </div>
</template>
<script>
import AddItemsMainInfo from '@/components/AddItems/AddItemsMainInfo.vue'
import AddItemCharacteristic from '@/components/AddItems/AddItemCharacteristic.vue'
import AddItemsAdditionalParameter from '@/components/AddItems/AddItemsAdditionalParameter.vue'
import { CreateAdditObj } from '@/basicLogicJS/Create/Create'
import Api from '@/Api/API'

export default {
  components: { AddItemsMainInfo, AddItemCharacteristic, AddItemsAdditionalParameter },
  data () {
    return {
      id: 0,
      data: {},
      create: false
    }
  },
  created () {
    this.getLengthItem()
  },
  methods: {
    getLengthItem () {
      Api.GetLengthItems().then(res => { this.id = ++res })
    },
    addMainData (el) {
      Object.assign(this.data, { id: this.id }, el)
    },
    addCharecterictic (el) {
      Object.assign(this.data, { characteristic: el })
    },
    addAdditionalPar (el) {
      Object.assign(this.data, el)
    },
    createItems () {
      if (Object.keys(this.data).length !== 0) {
        this.create = true
        const item = Object.assign(this.data, new CreateAdditObj(this.data))
        if (Object.keys(item).length !== 0) {
          this.sendItem(item)
        }
      } else { alert('Заполните поля') }
    },
    sendItem (el) {
      Api.PostItems(el).then(res => { if (res.status >= 200) { this.pathLengthI() } })
    },
    pathLengthI () {
      Api.PatchItems(this.id).then(res => { if (res.status >= 200) { this.getLengthItem() } })
      this.create = this.valid = false
      this.data = {}
      alert('Товар добавлен')
    }
  }
}
</script>

<style lang="scss">
// ad - add Item
.ad0__cont-bt{
    text-align: right;
}
.ad0__bt--add{
    min-width: 300px;
}
</style>
