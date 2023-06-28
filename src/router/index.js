import { createRouter, createWebHistory } from "vue-router";
import CourseCard from "@/components/CourseCard.vue";
import RegistrationPage from "@/components/RegistrationPage.vue";
import AuthorizePage from "@/components/AuthorizePage.vue";
import CoursesPage from "@/components/CoursesPage.vue";
const routes = [
  {
    path: "/",
    name: "Course",
    component: CourseCard,
  },
  {
    path: "/registration",
    name: "registartion",
    component: RegistrationPage,
  },
  {
    path: "/authorization",
    name: "authorization",
    component: AuthorizePage,
  },
  {
    path: "/coursesPage",
    name: "coursesPage",
    component: CoursesPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
