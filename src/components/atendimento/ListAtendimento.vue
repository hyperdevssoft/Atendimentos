<template>
    <v-container fluid class="content pa-0 ma-0">
        <div class="container mt-5">
            <h1 class="title mt-5">Atendimentos Hypersoft</h1>
            <table class="table mt-5 mb-4">
                <thead>
                    <tr>
                        <th scope="col-1">#</th>
                        <th scope="col-1">Técnico</th>
                        <th scope="col-1">Cliente / Razão Social</th>
                        <th scope="col-2">Relato</th>
                        <th scope="col-1">Data</th>
                        <th scope="col-1">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(atendimento, i) in atendimentos" :key="i">
                        <th scope="row" v-text="i+1"></th>
                        <td v-text="atendimento.tecnico"></td>
                        <td v-text="atendimento.cliente"></td>
                        <td v-text="atendimento.relato"></td>
                        <td v-text="atendimento.date"></td>
                        <td>
                            <router-link tag="button" :to="{name: 'editarAtendimento', params:{codigo: i+1},
                            query:{atendimento: atendimento}}">
                                <a class="edit">
                                    <i class="fas fa-edit"></i> Editar
                                </a>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <router-link to="/atendimentos/cadastro/">
                <a type="button" class="btn btn-red">Cadastrar Atendimento</a>
            </router-link>
        </div>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            atendimentos:[
                {tecnico:'Rickson', cliente:'Polo Norte', relato: 'Emissão de certificado digital', ativo: true, date:'07/01/2022'},
                {tecnico:'Jaílson', cliente:'Mega Leite', relato:'Dúvidas NFe', ativo: true, date:'07/01/2022'},
                {tecnico:'Luiz Felipe', cliente:'Udipres', relato:'Atualização de certificado digital', ativo: false, date:'07/01/2022'},
                {tecnico:'Daniel', cliente:'Leal', relato:'Instalação de sistema', ativo: true, date:'07/01/2022'},
                {tecnico:'Rudielle', cliente:'Cozini', relato:'Balanço com corretor', ativo: true, date:'07/01/2022'}
            ]
        }
    },
}
</script>