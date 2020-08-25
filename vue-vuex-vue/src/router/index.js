import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import First from "@/components/vuex/First";
import Second from "@/components/vuex/Second";
import Thirt from "@/components/vuex/Thirt";
import Fourth from "@/components/vuex/Fourth";
import htmlToWord from "@/components/za/htmlToWord";
import htmlToPdf from "@/components/za/htmlToPdf";
import objectChangeDetection from "@/components/vueSourceCode/objectChangeDetection/objectChangeDetection";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "hello页✌",
            component: HelloWorld,
            meta: { requiresAuth: 'certain' },
        },
        {
            path: "/vuex/First",
            name: "第一页✌",
            component: First,
            meta: { requiresAuth: 'vuex' },
        },
        {
            path: "/vuex/Second",
            name: "第二页✌",
            component: Second,
            meta: { requiresAuth: 'vuex' },
        },
        {
            path: "/vuex/Thirt",
            name: "第三页✌",
            component: Thirt,
            meta: { requiresAuth: 'vuex' },
        },
        {
            path: "/vuex/Fourth",
            name: "第四页✌",
            component: Fourth,
            meta: { requiresAuth: 'vuex' },
        },
        {
            path: "/za/htmlToWord",
            name: "纯js将html页面下载为word",
            component: htmlToWord,
            meta: { requiresAuth: 'htmlTo' },
        },
        {
            path: "/za/htmlToPdf",
            name: "纯js将html页面下载为pdf",
            component: htmlToPdf,
            meta: { requiresAuth: 'htmlTo' },
        },
        {
            path: "/vueSourceCode/objectChangeDetection",
            name: "Object的变化侦测✌",
            component: objectChangeDetection,
            meta: { requiresAuth: 'vueSource' },
        },
    ],
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};