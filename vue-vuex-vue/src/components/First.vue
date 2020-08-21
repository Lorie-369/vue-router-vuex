<template>
  <div id="First">
    <div id="centerBody">
      <div class="centerBody-margin">
        <div class="timu">let 和 const 命令</div>
        <div class="content">
          <div class="timu-erji">基本使用</div>
          <div class="zhushi">忽略。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import centerBody from "../common/vue/centerBody";
export default {
  name: "First",
  components: { centerBody },
  data() {
    return {};
  },
};
</script>
<style scoped>
@import "../common/css/bodycss.css";
#First {
  height: 100%;
}
</style>