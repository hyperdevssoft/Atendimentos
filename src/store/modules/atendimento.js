import Vue from 'vue'

export default {
    state:{
        atendimentos: [],
        cadCliDialog: false,
        cadTecDialog: false
    },
    mutations:{
        setAtendimentos(state, atendimentos){
            state.atendimentos = atendimentos
        },
        setCadCliDialog(state, cadCliDialog){
            state.cadCliDialog = cadCliDialog
        },
        setCadTecDialog(state, cadTecDialog){
            state.cadTecDialog = cadTecDialog
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
        },
        cadCliDialog(state){
            return state.cadCliDialog
        },
        cadTecDialog(state){
            return state.cadTecDialog
        }
    }
}