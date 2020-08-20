import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        saleItems: {}
    },
    mutations: {
        updatePosts(state, posts) {
            state.saleItems = posts
        }
    },
    actions: {
        loadData({
                     commit
                 }) {
            axios.get('http://localhost:1337/sale-items').then((response: any) => {
                // console.log(response.data, this)
                commit('updatePosts', response.data)
            })
        }
    },
    modules: {}
})
