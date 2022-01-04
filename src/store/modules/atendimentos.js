import Vue from 'vue'

export default {
    state:{
        atendimentos: []
    },
    mutations:{
        setAtendimentos(state, atendimentos){
            state.atendimentos = atendimentos
        }
    },
    actions:{
        loadAtendimentos({commit}){
            Vue.prototype.$http('atendimentos.json').then(resp => {
                const atendimentos = resp.data
                if(atendimentos){
                    commit('setAtendimentos', atendimentos)
                }
            })
        }
    },
    getters:{
        atendimentos(state){
            return state.atendimentos
        }
    }
}