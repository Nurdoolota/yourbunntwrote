<template>
  <div>
    <h1>Курсы</h1>
    <div class="courses">
      <course-element
        class="courses__course"
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import CourseElement from "@/components/CourseElement.vue";
export default {
  components: {
    CourseElement,
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          name: "ЭВМ",
          teacher: "Медведев",
        },
        {
          id: 2,
          name: "Интернет-технологии",
          teacher: "Серёдкин",
        },
        {
          id: 3,
          name: "Сетевые технологии",
          teacher: "Казаков",
        },
      ],
    };
  },
};
</script>

<style scoped>
.courses__course:not(:last-child) {
  margin: 0px 0px 10px 0px;
}
</style>
