import Vue from 'vue'
import Vuex from 'vuex'

import tecnico from './modules/tecnico'
import cliente from './modules/cliente'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        rules: {
            required: value => !!value || 'Esse campo é obrigatório',
            nome: value => (value.length >= 3 || value.length == 0)   || 'Mínimo 3 caracteres',
            relato: value => (value.length >= 10 || value.length == 0) || 'Mínimo 10 caracteres',
            cnpj: value => (value.length == 18 || value.length == 0) || 'CPNJ inexistente',
            telefone: value => (value.length > 13 || value.length == 0) || 'Telefone inexistente',
            celular: value => (value.length > 14 || value.length == 0) || 'Telefone inexistente'
        }
    },
    getters:{
        rules(state){
            return state.rules
        }
    },
    modules:{
        tecnico,
        cliente
    }
})