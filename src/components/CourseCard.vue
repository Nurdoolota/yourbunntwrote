<template>
  <div>
    <button @click.stop="goToRegistation">Регистрация</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegistation() {
      this.$router.push("/registration");
    },
  },
};
</script>

<style scoped>
.course-card {
  border: 2px solid black;
  padding: 10px;
  margin: 0px 0px 10px 0px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
}

.course-card:hover {
  transform: scale(1.005);
}
</style>
