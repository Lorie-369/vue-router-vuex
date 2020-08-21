<template>
  <div id="First">
    <div id="centerBody">
      <div class="centerBody-margin">
        <div class="timu">这是用state获取的state</div>
        <div class="zhanshi">
          <div
            class="zhanshi_item"
            v-for="(value,key,index) in state"
            :key="index"
          >state[{{index}}]--{{key}}--{{!value ? '空' : value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import centerBody from "../common/vue/centerBody";
import { mapState } from "vuex";
export default {
  name: "First",
  components: { centerBody },
  data() {
    return {};
  },
  computed: {
    state() {
      return this.$store.state;
    },
  },
  mounted() {
    let obj = { foo: 123 };
    //Object.getOwnPropertyDescriptor可以获得该对象的描述属性
    Object.getOwnPropertyDescriptor(obj, "foo");
  },
};
</script>
<style lang="less" scoped>
@import "../common/css/bodycss.css";
@import "../common/css/lessTest.less";
#First {
  height: 100%;
  margin: @margin;
}
</style>