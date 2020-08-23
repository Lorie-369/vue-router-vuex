<template>
  <div id="objectChangeDetection">
    <div id="centerBody">
      <div class="centerBody-margin">
        <div class="timu">使Object数据变得“可观测”</div>
        <div class="fangfajieshao">
          使用方法
          <span class="fangfa">Object.defineProperty()</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "objectChangeDetection",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "../../common/css/bodycss.css";
@import "../../common/css/lessTest.less";
#objectChangeDetection {
  height: 100%;
  margin: @margin;
}
</style>