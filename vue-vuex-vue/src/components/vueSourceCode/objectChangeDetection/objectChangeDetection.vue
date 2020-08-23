<template>
  <div id="objectChangeDetection">
    <div id="centerBody">
      <div class="centerBody-margin">
        <div class="timu">使Object数据变得“可观测”</div>
        <div class="fangfajieshao">
          使用方法
          <span class="fangfa">Object.defineProperty()</span>
        </div>
        <div class="hualifengexian"></div>
        <div class="lizi">例子</div>
        <div>
          <h2>{{person.name}}--{{person.age}}</h2>
          <h3>{{person.fav}}</h3>
          <div v-for="(item,index) in 3" :key="index">{{item}}</div>
          <h3>{{msg}}</h3>
          <div v-text="msg"></div>
          <div v-html="htmlStr"></div>
          <el-input v-model="msg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "objectChangeDetection",
  data() {
    return {
      person: {
        name: "",
        age: 22,
        fav: ""
      },
      msg: "",
      htmlStr: ""
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../common/css/bodycss.css";
@import "../../../common/css/lessTest.less";
#objectChangeDetection {
  height: 100%;
  margin: @margin;
}
</style>