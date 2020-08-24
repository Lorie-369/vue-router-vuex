<template>
  <div id="htmlToWord">
    <div id="centerBody">
      <div>
        <div id="source-html" style="750px">
          <div
            style="width: 100%; text-align: center; font-weight: 600; font-size: 17px;margin-bottom: 18px;"
          >县级摸底阶段质量验收表</div>
          <div style="width: 100%; text-align: center;">
            地址：
            <span style="text-decoration: underline;">&nbsp;四川&nbsp;</span>省（区、县）
            <span style="text-decoration: underline;">&nbsp;宜宾&nbsp;</span>市（地、州、盟）
            <span style="text-decoration: underline;">&nbsp;珙&nbsp;</span>县（市、区、旗）
          </div>
          <table
            class="fixed_headers"
            style="border: 1px solid #ccc;border-collapse: collapse; margin: 0; padding: 0;  width: 100%;table-layout: fixed;"
          >
            <tbody style="width: 100%;">
              <td style="line-height: 38px; text-align: center;border: 1px solid black;">普查小区</td>
              <td
                style="line-height: 38px; text-align: center;border: 1px solid black;"
                colspan="2"
              >
                普查小区图
                <br />差错情况
              </td>
              <td
                style="line-height: 38px; text-align: center;border: 1px solid black;"
                colspan="2"
              >建筑物数量</td>
              <td
                style="line-height: 38px; text-align: center;border: 1px solid black;"
                colspan="2"
              >住房单元</td>
              <td
                style="line-height: 38px; text-align: center;border: 1px solid black;"
                colspan="2"
              >户籍人口</td>
              <td
                style="line-height: 38px; text-align: center;border: 1px solid black;"
                colspan="2"
              >出生人口</td>
              <td
                style="line-height: 38px; text-align: center;border: 1px solid black;"
                colspan="2"
              >死亡人口</td>
              <tr v-for="(item,index) in tableData1" :key="index">
                <td style="line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
                <td
                  style=" line-height: 38px; text-align: center;border: 1px solid black;"
                >{{item.name}}</td>
              </tr>
              <!-- 合计 -->
              <tr>
                <td style="line-height: 38px; text-align: center;border: 1px solid black;">合计</td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
                <td style=" line-height: 38px; text-align: center;border: 1px solid black;"></td>
              </tr>
              <!-- 指标差错率（注） -->
              <tr>
                <td style="line-height: 38px; text-align: center;border: 1px solid black;">指标差错率（注）</td>
                <td
                  style="line-height: 38px; text-align: center;border: 1px solid black;"
                  colspan="2"
                ></td>
                <td
                  style="line-height: 38px; text-align: center;border: 1px solid black;"
                  colspan="2"
                ></td>
                <td
                  style="line-height: 38px; text-align: center;border: 1px solid black;"
                  colspan="2"
                ></td>
                <td
                  style="line-height: 38px; text-align: center;border: 1px solid black;"
                  colspan="2"
                ></td>
                <td
                  style="line-height: 38px; text-align: center;border: 1px solid black;"
                  colspan="2"
                ></td>
                <td
                  style="line-height: 38px; text-align: center;border: 1px solid black;"
                  colspan="2"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button id="btn-export" class="btn" @click="exportHTML">Export</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "htmlToWord",
  data() {
    return {
      tableData1: [
        {
          name: "Apple",
          color: "Red",
          description: "These are red.",
        },
        {
          name: "Apple",
          color: "Red",
          description: "These are red.",
        },
        {
          name: "Apple",
          color: "Red",
          description: "These are red.",
        },
      ],
    };
  },
  methods: {
    //将html导出为word
    exportHTML() {
      var header =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
      var footer = "</body></html>";
      var sourceHTML =
        "<div>" + document.getElementById("source-html").innerHTML + "</div>";

      var source =
        "data:application/vnd.ms-word;charset=utf-8," +
        encodeURIComponent(sourceHTML);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = "document.doc";
      fileDownload.click();
      document.body.removeChild(fileDownload);
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../common/css/bodycss.css";
@import "../../common/css/lessTest.less";
#htmlToWord {
  height: 100%;
  margin: @margin;
}
#btn-export.btn {
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

.btn#btn-export {
  border: none;
  background: rgb(251, 33, 117);
  background: linear-gradient(
    0deg,
    rgba(251, 33, 117, 1) 0%,
    rgba(234, 76, 137, 1) 100%
  );
  color: #fff;
  overflow: hidden;
}

.btn#btn-export:hover {
  text-decoration: none;
  color: #fff;
}
.btn#btn-export:before {
  position: absolute;
  content: "";
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: #fff;
  animation: shiny-btn1 3s ease-in-out infinite;
}
.btn#btn-export:hover {
  opacity: 0.7;
}
.btn#btn-export:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}

@-webkit-keyframes shiny-btn1 {
  0% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    -webkit-transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}
</style>