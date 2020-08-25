<template>
  <div id="header">
    <div class="frame">
      <div class="frame_img-div">
        <img src="../../assets/svg/wohenshuai.svg" height="40" class="title_svg" />
      </div>
      <div class="title_nav">
        <div
          v-for="(item, index) in routes"
          :key="index"
          @click="navGo(item, index)"
          style="display:inline-block;"
        >
          <div
            v-if="item.meta.requiresAuth === 'certain' || item.meta.requiresAuth === 'htmlTo'"
            :class="navIndex === index ? 'title_nav-children_exmple' : 'title_nav-children'"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "headerNav",
  data() {
    return {};
  },
  computed: {
    routes() {
      return this.getRoutes.routes;
    },
    navIndex() {
      return this.getIndex;
    },
    ...mapGetters([
      "getIndex",
      "getRoutes",
      // ...
    ]),
  },
  mounted() {
    this.$nextTick(() => {
      this.$router.push(this.routes[this.navIndex].path);
    });
  },
  methods: {
    navGo(item, index) {
      this.changeIndex(index);
      this.$router.replace(item.path);
    },
    ...mapMutations(["changeIndex"]),
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
  padding-left: 1.5em;
  padding-right: 1.5em;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  cursor: pointer;
}
.frame .title_nav-children:hover {
  font-size: 19px;
  background: #95a5a6;
}
.frame .title_nav-children_exmple {
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
  background: black;
  color: white;
}
</style>