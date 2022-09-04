<template>
    <div class="ot7">
        <form class="ot7__from-quantity">
        <button type="button"  @click="quantity > 1 ? quantity-- : ''"><span></span></button>
        <p class="ot7__quantity --inline">{{quantity}}</p>
        <button type="button" @click="quantity < dataQuantity ? quantity++ : ''"><span></span><span></span></button>
    </form>
    </div>
</template>

<script>
export default {
  name: 'QuantityPurchasedProduct',
  props: {
    dataQuantity: {
      type: Number,
      default: 0
    },
    quantityNumber: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      quantity: this.quantityNumber
    }
  },
  watch: {
    quantity () {
      this.$emit('quantity', this.quantity)
    }
  }
}
</script>
<style lang="scss">
    .ot7{
        display: inline-block;
        &__from-quantity{
        background-color: var(--color-white);
        border-radius: var(--border-radius-3px);
        border: 1px solid var(--color-black);
        display: flex;
        align-items: baseline;
        padding: 0.75rem 0.625rem;
        & button{
            width: 12px;
            height: 12px;
            position: relative;
            cursor: pointer;
            background: inherit;
            & span{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 12px;
                height: 1.5px;
                background-color: var(--color-black);
                &:nth-child(2){
                    transform: rotate(90deg);
                }
            }
        }
        }
        &__quantity{
        padding: 0 1.625rem;
        }
    }
</style>
