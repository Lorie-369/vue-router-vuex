"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("@/components/HelloWorld"));

var _First = _interopRequireDefault(require("@/components/vuex/First"));

var _Second = _interopRequireDefault(require("@/components/vuex/Second"));

var _Thirt = _interopRequireDefault(require("@/components/vuex/Thirt"));

var _Fourth = _interopRequireDefault(require("@/components/vuex/Fourth"));

var _htmlToWord = _interopRequireDefault(require("@/components/za/htmlToWord"));

var _htmlToPdf = _interopRequireDefault(require("@/components/za/htmlToPdf"));

var _objectChangeDetection = _interopRequireDefault(require("@/components/vueSourceCode/objectChangeDetection/objectChangeDetection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: "/",
    name: "hello页✌",
    component: _HelloWorld["default"],
    meta: {
      requiresAuth: 'certain'
    }
  }, {
    path: "/vuex/First",
    name: "第一页✌",
    component: _First["default"],
    meta: {
      requiresAuth: 'vuex'
    }
  }, {
    path: "/vuex/Second",
    name: "第二页✌",
    component: _Second["default"],
    meta: {
      requiresAuth: 'vuex'
    }
  }, {
    path: "/vuex/Thirt",
    name: "第三页✌",
    component: _Thirt["default"],
    meta: {
      requiresAuth: 'vuex'
    }
  }, {
    path: "/vuex/Fourth",
    name: "第四页✌",
    component: _Fourth["default"],
    meta: {
      requiresAuth: 'vuex'
    }
  }, {
    path: "/za/htmlToWord",
    name: "纯js将html页面下载为word",
    component: _htmlToWord["default"],
    meta: {
      requiresAuth: 'htmlTo'
    }
  }, {
    path: "/za/htmlToPdf",
    name: "纯js将html页面下载为pdf",
    component: _htmlToPdf["default"],
    meta: {
      requiresAuth: 'htmlTo'
    }
  }, {
    path: "/vueSourceCode/objectChangeDetection",
    name: "Object的变化侦测✌",
    component: _objectChangeDetection["default"],
    meta: {
      requiresAuth: 'vueSource'
    }
  }]
});

exports["default"] = _default;
var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};