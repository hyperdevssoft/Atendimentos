import Vue from "vue"

export default {
    state:{
        clientes: []
    },
    actions:{
        loadClientes({commit}){
            Vue.prototype.$http('clientes.json').then(resp => {
                const clientes = resp.data
                if(clientes){
                    commit('setClientes', clientes)
                }
            })
        }
    },
    mutations:{
        setClientes(state, clientes){
            state.clientes = clientes
        }
    }
}