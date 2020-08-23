import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import First from "@/components/vuex/First";
import Second from "@/components/vuex/Second";
import Thirt from "@/components/vuex/Thirt";
import Fourth from "@/components/vuex/Fourth";
import objectChangeDetection from "@/components/vueSourceCode/objectChangeDetection/objectChangeDetection";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "hello页✌",
      component: HelloWorld,
      meta: { requiresAuth: true },
    },
    {
      path: "/vuex/First",
      name: "第一页✌",
      component: First,
      meta: { requiresAuth: false },
    },
    {
      path: "/vuex/Second",
      name: "第二页✌",
      component: Second,
      meta: { requiresAuth: false },
    },
    {
      path: "/vuex/Thirt",
      name: "第三页✌",
      component: Thirt,
      meta: { requiresAuth: false },
    },
    {
      path: "/vuex/Fourth",
      name: "第四页✌",
      component: Fourth,
      meta: { requiresAuth: false },
    },
    {
      path: "/vueSourceCode/objectChangeDetection",
      name: "Object的变化侦测✌",
      component: objectChangeDetection,
      meta: { requiresAuth: false },
    },
  ],
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
