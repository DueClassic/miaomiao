export default {
  path: "/mime",
  component: () => import("@/views/mime"),
  children: [
    {
      path: "center",
      component: () => import("@/views/mime/center.vue"),
    },
    {
      path: "login",
      component: () => import("@/components/Login"),
    },
    {
      path: "register",
      component: () => import("@/components/Register"),
    },
    {
      path: "findPassword",
      component: () => import("@/components/FindPassword"),
    },
    {
      path: "/mime",
      redirect: "center",
    },
  ],
};
