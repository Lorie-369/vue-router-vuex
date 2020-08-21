<template>
  <div id="hello">
    <div class="testBtn">
      <el-button :plain="true" type="primary" @click="helloElementUI">这是element-UI按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    helloElementUI() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以修改样式 "),
          h("i", { style: "color: #c0392b" }, "红色"),
        ]),
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  position: relative;
  height: 100%;
  width: 100%;
}
#hello .testBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
