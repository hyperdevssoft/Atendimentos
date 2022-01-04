import Vue from 'vue'

export default {
    state:{
        tecnicos: [],
    },
    mutatios:{
        setTecnicos(state, tecnicos){
            state.tecnicos = tecnicos
        }
    },
    actions:{
        loadTecnicos({commit}){
            Vue.prototype.$http('tecnicos.json').then(resp => {
                const tecnicos = resp.data
                if(tecnicos){
                    commit('setTecnicos', tecnicos)
                }
            })
            .catch(error => console.log(error))
        }
    },
    getters:{
        tecnicos(state){
            return state.tecnicos
        }
    }
}