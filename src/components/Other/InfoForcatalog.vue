<template>
<div class="ot2" :style="{ backgroundImage: 'url(https://ic.wampi.ru/2022/07/29/info-for-catalog.jpg)'}">
    <div class="ot2__cont">
        <h2 class="ot2__text --white">Стабилизаторы и Источники бесперебойного питания энергии</h2>
        <div class="ot2__line bg--white"></div>
        <button class="ot2__button bg--white br--3px">
            <a href="#" class=" --blue">Перейти в каталог</a>
        </button>
    </div>
</div>
</template>

<script>
export default {
  name: 'InfoforCatalog'
}
</script>

<style lang="scss">
// ot - other
// cont - content
.ot2{
    min-height: 300px;
    &__cont{
        width: 40%;
        margin: auto;
        text-align: left;
        padding: 3.125rem 0;
    }
    &__text{
        font-size: 1.5rem;
        line-height: var(--text-line-height);
    }
    &__line{
        height: 1px;
        width: 100px;
        margin-top: 1.5rem;
    }
    &__button{
        padding: 1.125rem 3.75rem;
        margin-top: 2rem;
    }
}
@media screen and (max-width: 920px) {
    .ot2__cont{
        width: 70%;
    }
}
@media screen and (max-width: 620px) {
    .ot2__cont{
        width: 100%;
        padding: 2rem;
    }
    .ot2__text{
        font-size: 1.25rem;
    }
}
</style>
