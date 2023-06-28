<template>
  <div>
    <form @sumbit.prevent>
      <form-input v-model.trim="email" label="Email" />
      <p class="error" v-if="!isEmailValid">Некорректный формат email</p>
      <form-input v-model.trim="login" label="Логин" />
      <p class="error" v-if="!isLoginValid">
        Логин должен содержать только буквы и цифры
      </p>
      <form-input v-model.trim="password" label="Пароль" />
      <p class="error" v-if="!isPasswordValid">
        Пароль должен содержать минимум 8 символов
      </p>
      <form-input v-model.trim="confirmPassword" label="Подтверждение пароля" />
      <p class="error" v-if="!isConfirmPasswordValid">Пароли не совпадают</p>
    </form>
    <button @click="register" type="submit">Зарегистрироваться</button>
  </div>
</template>

<script>
import FormInput from "./FormInput.vue";
export default {
  name: "RegistrationPage",
  components: { FormInput },
  data() {
    return {
      email: "",
      login: "",
      password: "",
      confirmPassword: "",
      isEmailValid: true,
      isLoginValid: true,
      isPasswordValid: true,
      isConfirmPasswordValid: true,
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
    validateConfirmPassword() {
      this.isConfirmPasswordValid = this.password === this.confirmPassword;
    },
    register() {
      this.validateEmail();
      this.validateUsername();
      this.validatePassword();
      this.validateConfirmPassword();

      if (
        this.isEmailValid &&
        this.isLoginValid &&
        this.isPasswordValid &&
        this.isConfirmPasswordValid
      ) {
        // Тут должна быть логика для регистрации
        console.log("Регистрация успешна!");
      } else {
        console.log("Форма содержит неверные данные");
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
