<template>
  <div>
    <div class="header">
      <nav>
        <ul>
          <li><a href="">курсы</a></li>
          <li><a href="#">авторизация</a></li>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  display: block;
}
nav {
  padding: 5px 0;
  width: 600px;
  margin: 0 auto;
  background: orange;
}
nav ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
}
a {
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
}
</style>
