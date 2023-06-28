<template>
  <div>
    <form @submit.prevent>
      <form-input v-model.trim="email" label="Email" />
      <form-input v-model.trim="login" label="Логин" />
      <form-input v-model.trim="password" label="Пароль" />
      <button @click.stop="register" type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import FormInput from "./FormInput.vue";
export default {
  components: { FormInput },
  data() {
    return {
      email: "",
      login: "",
      password: "",
    };
  },
  methods: {
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isEmailValid = regex.test(this.email);
    },
    validateUsername() {
      const regex = /^[a-zA-Z0-9]+$/;
      this.isLoginValid = regex.test(this.login);
    },
    validatePassword() {
      this.isPasswordValid = this.password.length > 6;
    },
    logIn() {
      this.validateEmail();
      this.validateUsername();
      this.validatePassword();

      if (this.isEmailValid && this.isLoginValid && this.isPasswordValid) {
        // Тут должна быть логика для авторизации
        console.log("Регистрация успешна!");
      } else {
        console.log("Форма содержит неверные данные");
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
