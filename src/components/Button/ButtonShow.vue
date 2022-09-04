<template>
<button class="bt__show text-16 bg--blue --white br--3px">
    Показать
</button>
</template>
<script>

export default {
  name: 'ButtonShow'
}
</script>

<style lang="scss">
.bt__show{
  padding: 1.125rem 0;
  font-weight: 500;
  cursor: pointer;
  & svg {
    width: 19px;
    height: 19px;
    margin-right: 0.625rem;
    vertical-align: text-bottom;
  }
  &.small{
    width: 263px;
    margin-top: 0;
  }
}
</style>
