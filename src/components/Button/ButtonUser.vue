<template>
<div>
  <button class="bt__user" @click="showWindowEnter">
     <IconUser/>
  </button>
  <div class="bc3 bg--white br--3px" :class="{ active: windowRegistration }">
     <h3 class="bc3__title text-36">{{ Text.title }}</h3>
     <form class="bc3__form">
      <input type="text" class="bc3__input text-24" placeholder="Логин" v-model="this.data.login">
      <input v-if="!stait" type="email" class="bc3__input text-24" placeholder="Email" v-model="this.data.password">
      <input type="password" class="bc3__input text-24" placeholder="Пароль" v-model="this.data.email">
     </form>
     <div class="spacer--20px"></div>
     <button class="bc3__bt bt bt--blue text-24">{{ Text.button }}</button>
     <div class="spacer--20px"></div>
     <div class="decor-line"></div>
     <div class="spacer--20px"></div>
     <p class="bc3__text text-18 --blue --bold" @click="replacement">{{ Text.replacement }}</p>
  </div>
</div>
</template>

<script>
import { inject } from 'vue'
import IconUser from '@/components/Icons/IconUser.vue'
export default {
  name: 'ButtonUser',
  setup () {
    const mask = inject('mask')
    return {
      mask
    }
  },
  data () {
    return {
      windowRegistration: false,
      stait: true,
      data: { login: '', password: '', email: '' }
    }
  },
  computed: {
    Text () {
      return {
        title: this.stait ? 'Авторизация' : 'Регистрация',
        button: this.stait ? 'Войти' : 'Зарегистрироватьца',
        replacement: this.stait ? 'Создать аккаунт' : 'Войти в аккаунт'
      }
    }
  },
  methods: {
    showWindowEnter () {
      this.windowRegistration = this.mask = true
    },
    replacement () {
      this.stait = !this.stait
      this.data = { login: '', password: '', email: '' }
    }
  },
  watch: {
    mask () {
      if (!this.mask && this.windowRegistration) {
        this.windowRegistration = false
      }
    }
  },
  components: { IconUser }
}
</script>
<style lang="scss">
  .bc3{
    position: fixed;
    max-width: 500px;
    width: 100%;
    top: 50%;
    left: 50%;
    padding: 2rem 3.125rem;
    transition: all ease 0.3s;
    transform-origin: top left;
    transform: translate(-50%, -50%) scaleY(0);
    z-index: 801;
    opacity: 0;
    text-align: center;
    &.active {
    opacity: 1;
    transform: translate(-50%, -50%) scaleY(1);
  }
  &__title{
    margin-bottom: 2.5em;
  }
  &__input {
    width: 100%;
    padding: 0.625em 1em;
    border:  1px solid var(--color-black);
    border-radius: var(--border-radius-3px);
    color: var(--color-dark-gray);
    margin-bottom: 30px;
    &:focus,
    &:hover{
        border: 1px solid var(--color-yellow);
    }
    &:invalid{
       border: 1px solid var(--color-red);
    }
  }
  &__bt{
    width: 100%;
  }
  &__text{
    cursor: pointer;
  }
}
</style>
