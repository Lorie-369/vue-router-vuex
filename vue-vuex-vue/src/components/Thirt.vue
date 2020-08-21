<template>
  <div id="Thirt">
    <div id="centerBody">
      <div class="centerBody-margin">
        <div class="timu">这是用muatation修改的state</div>
        <div class="zhanshi">
          <el-input placaholder="这是修改的type" v-model="type" />
          <el-button @click="changetype(type)">changetype</el-button>
          <el-button @click="changeRoutes">changeRoutes</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "Thirt",
  data() {
    return {
      type: "",
      index: undefined,
    };
  },
  computed: {},
  methods: {
    changeRoutes() {
      this.$message("你不要点这个按钮，不然导航栏就不见了");
    },
    ...mapMutations(["changetype", "changeIndex"]),
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "../common/css/bodycss.css";
@import "../common/css/lessTest.less";
#Thirt {
  height: 100%;
  margin: @margin;
}
</style>