<template>
    <div class="ip3 bg--lite-gray" >
        <h2 class="ip3__title text-24">Характеристики</h2>
        <div class="decor-line"></div>
        <div class="spacer--10px"></div>
        <div class="ip3__container">
            <div class="ip3__item" v-for="item in data" :key="item">
                <h2 class="ip3__title">{{ item.name }}</h2>
                <div class="decor-line mtb-1"></div>
                <div class="ip3__cont" v-for="el in item.content" :key="el">
                    <div class="ip3__name">{{el.name}}</div>
                    <div class="ip3__value">{{el.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ItemBasicInformation',
  props: {
    data: Array
  }
}
</script>

<style lang="scss">
.ip3{
    padding: 2rem;
    text-align: left;
    width: 70%;
     &__title{
        margin-bottom: 2rem;
        font-size: 1.125rem;
        line-height: var(--text-line-height);
    }
    &__container{
        padding-top: 1.25rem;
    }
    &__item{
        padding-bottom: 1.25rem;
    }
    &__name{
        font-size: 1.125rem;
        line-height: var(--text-line-height);
        display: inline-block;
        color: var(--color-dark-gray);
    }
    &__value{
        float: right;
        font-size: 1.125rem;
        line-height: var(--text-line-height);
    }
    &__cont{
        margin-bottom: 0.5rem;
    }
}
@media screen and (max-width: 900px) {
  .ip3{
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
    .ip3{
        padding: 1rem;
        &__title,
        &__name,
        &__value{
            font-size: 1rem;
        }
        &__title{
            margin-bottom: 1rem;
        }
        &__cont{
            display: flex;
        }
        &__name{
            width: 50%;
        }
        &__value{
            width: 50%;
            text-align: end;
        }
        &__container{
            padding-top: 0.5rem;
        }
    }
}
</style>
