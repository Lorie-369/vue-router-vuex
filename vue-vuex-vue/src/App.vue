<template>
  <div id="app">
    <headerNav />
    <router-view style="margin-top: 50px;" />
  </div>
</template>

<script>
import headerNav from "./common/vue/headerNav";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  components: { headerNav },
  data() {
    return {};
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    ...mapGetters([
      "getRoutes",
      // ...
    ]),
  },
  mounted() {
    this.changeRoutes(this.routes);
  },
  methods: {
    ...mapMutations([
      "changeRoutes", // 将 `this.changeRoutes()` 映射为 `this.$store.commit('changeRoutes')`
    ]),
  },
};
</script>

<style>
html {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  height: calc(100vh - 50px);
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #c4c3ca;
  background-color: #1f2029;
  overflow-x: hidden;
}
#app {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
