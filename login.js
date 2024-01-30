import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    // 回傳 Vue 的資料
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const api = "https://vue3-course-api.hexschool.io/v2/admin/signin";

      // 使用 axios 和 post api 驗證 user object
      axios
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data;

          // 寫入通過驗證的 token 和 expired timestamp
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
          window.location = "products.html";
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
}).mount("#app");