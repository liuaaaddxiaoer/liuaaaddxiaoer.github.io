/**
 * Created by liuxiaoer on 2017/12/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
      title : '',
      KDefaultImg: 'this.src= "'+require('../assets/group_avatar_default.png')+'" '
    },
    mutations
})

export default store
