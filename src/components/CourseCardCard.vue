<template>
  <div>
    <div class="course-card">
      <p class="course-card__content">{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
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
