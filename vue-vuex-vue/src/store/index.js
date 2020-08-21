/**
 * Created by Administrator on 2017/9/18.
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        index: 0,
        type: '',
        routes: [],
    },
    getters: {
        getIndex: function(state) {
            return state.index;
        },
        getType: function(state) {
            if (!state.type) {
                state.type = localStorage.getItem('type')
            }
            return state.type;
        },
        getRoutes: function(routes) {
            return routes
        }
    },
    mutations: {
        //格式：类型(名字)+处理函数
        //加1
        changeIndex(state, index) {
            state.index = index;
        },
        changetype(state, type) {
            //console.log(state)//state对象
            state.type = type;
            alert("可以去其他页面看一下")
        },
        changeRoutes(state, routes) {
            state.routes = routes;
        }
    },
    actions: {
        /* increment({commit}){
           commit("INCREMENT")
         }*/
    }
})

export default store