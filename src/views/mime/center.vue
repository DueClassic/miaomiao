<template>
  <div>
    <div>个人中心:</div>
    <div>
      当前用户：{{ $store.state.user.name }}
      <button @touchstart="handleToLogout">退出</button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "center",
  methods: {
    handleToLogout() {
      // this.$store.commit("user/USER_NAME", {
      //   name: "",
      // });
      console.log("logout");
      this.$router.push("/mime/login");
      // this.axios.get("/api2/users/logout").then((res) => {
      //   var status = res.data.status;
      //   if (status === 0) {
      //     localStorage.removeItem("name");
      //     this.$store.commit("user/USER_NAME", {
      //       name: "",
      //     });
      //     this.$router.push("/mime/login");
      //   }
      // });
    },
  },
  // beforeRouteEnter(to, from, next) {
    // axios.get("/api2/users/getUser").then((res) => {
    //   var status = res.data.status;
    //   if (status === 0) {
    //     next((vm) => {
    //       localStorage.setItem("name", res.data.data.username);
    //       vm.$store.commit("user/USER_NAME", { name: res.data.data.username });
    //     });
    //   } else {
    //     next("/mime/login");
    //   }
    // });
    // next();
  // },
};
</script>

<style scoped>
</style>
