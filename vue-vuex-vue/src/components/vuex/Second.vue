<template>
  <div id="Second">
    <div id="centerBody">
      <div class="centerBody-margin">
        <div class="timu">这是用getter获取的state</div>
        <div class="zhanshi">
          <div class="zhanshi_item">getType--{{!getType ? '空' : getType}}</div>
          <div class="zhanshi_item">getRoutes--{{!getRoutes ? '空' : getRoutes}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Second",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getType", "getRoutes"]),
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "../../common/css/bodycss.css";
@import "../../common/css/lessTest.less";
#Second {
  height: 100%;
  margin: @margin;
}
</style>