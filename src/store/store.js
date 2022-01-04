import Vue from 'vue'
import Vuex from 'vuex'

import tecnico from './modules/tecnico'
import cliente from './modules/cliente'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tecnico,
        cliente
    }
})