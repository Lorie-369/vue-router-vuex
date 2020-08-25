<template>
  <div id="htmlToPdf">
    <div id="centerBody">
      <div>
        <div id="content">
          <h1>The title goes here</h1>
          <p>The pararaph goes here</p>
        </div>
        <div id="page"></div>
        <button id="submit" @click="exportPdf" class="custom-btn btn-1">导出</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "htmlToPdf",
  data() {
    return {};
  },
  methods: {
    exportPdf() {
      var doc = new jsPDF();
      var specialElementHandlers = {
        "#editor": function (element, renderer) {
          return true;
        },
      };
      doc.fromHTML(document.getElementById("content").innerHTML, 15, 15, {
        width: 190,
        elementHandlers: specialElementHandlers,
      });
      doc.save("sample-page.pdf");
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../common/css/bodycss.css";
@import "../../common/css/lessTest.less";
#htmlToPdf {
  height: 100%;
  margin: @margin;
  .custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  }

  /* 1 */
  .btn-1 {
    background: rgb(6, 14, 131);
    background: linear-gradient(
      0deg,
      rgba(6, 14, 131, 1) 0%,
      rgba(12, 25, 180, 1) 100%
    );
    border: none;
  }
  .btn-1:hover {
    background: rgb(0, 3, 255);
    background: linear-gradient(
      0deg,
      rgba(0, 3, 255, 1) 0%,
      rgba(2, 126, 251, 1) 100%
    );
  }
}
</style>>
