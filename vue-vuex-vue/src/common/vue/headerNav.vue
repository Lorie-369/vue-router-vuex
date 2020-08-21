<template>
  <div id="header">
    <div class="frame">
      <div class="frame_img-div">
        <img src="../../assets/svg/wohenshuai.svg" height="40" class="title_svg" />
      </div>
      <div class="title_nav">
        <div
          class="title_nav-children"
          v-for="(item, index) in routes"
          :key="index"
          @click="navGo(item)"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "headerNav",
  data() {
    return {};
  },
  computed: {
    routes() {
      return this.getRoutes.routes;
    },
    ...mapGetters([
      "getRoutes",
      // ...
    ]),
  },
  mounted() {},
  methods: {
    navGo(item) {
      this.$router.push(item.path);
    },
  },
};
</script>
<style scoped>
#header {
  position: fixed;
  top: 0;
  z-index: 1;
  height: 50px;
  width: 100%;
  background: white;
}
.frame {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
}
#header .frame .title_svg {
  margin-left: 15px;
}
.title_nav {
  height: 100%;
  width: 80%;
  margin-left: 15px;
}
.frame_img-div {
  padding-top: 2px;
}
.frame .title_nav-children {
  font-family: "Satisfy", cursive;
  font-size: 17px;
  display: inline-block;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  cursor: pointer;
}
.title_nav-children:hover {
  background: black;
  color: white;
}
</style>