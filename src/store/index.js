import Vue from 'vue'
import Vuex from 'vuex'

import igwidgetModule from "./modules/igwidget-module";

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: false,
  modules: {
    igwidget: igwidgetModule,
  },
})

export default store
