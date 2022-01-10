<template>
    <v-container fluid class="content pa-0 ma-0">
        <div class="container mt-5">
            <h1 class="title mt-5">Atendimentos Hypersoft</h1>
            <template>
                <v-card>
                    <v-card-title>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Pesquisa rápida"
                        single-line hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="header" :items="atendimentos" :items-per-page="5" 
                    class="elevation-1 mt-5" :search="search">
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-btn :to="{ name: 'editarAtendimento', params:{codigo: item.codigo}, query:{atendimento: item}}" 
                            class="edit" plain icon >
                                <v-icon small class="mr-2">
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </template>
            <router-link to="/atendimentos/cadastro/">
                <a type="button" class="btn btn-red mt-5">Cadastrar Atendimento</a>
            </router-link>
        </div>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            search: '',
            dialog: false,
            header:[
                {text: '#', align: 'start', sortable: 'true', value: 'codigo' },
                {text: 'Técnico', value: 'tecnico'},
                {text: 'Cliente', value: 'cliente'},
                {text: 'Relato', value: 'relato'},
                {text: 'Data', value: 'date'},
                {text: 'Ações', value: 'actions', sortable: false}
            ],
            atendimentos:[
                {codigo: '1', tecnico:'Rickson', cliente:'Polo Norte', relato: 'Emissão de certificado digital', ativo: true, date:'07/01/2022'},
                {codigo: '2', tecnico:'Jaílson', cliente:'Mega Leite', relato:'Dúvidas NFe', ativo: true, date:'07/01/2022'},
                {codigo: '3', tecnico:'Luiz Felipe', cliente:'Udipres', relato:'Atualização de certificado digital', ativo: false, date:'07/01/2022'},
                {codigo: '4', tecnico:'Daniel', cliente:'Leal', relato:'Instalação de sistema', ativo: true, date:'07/01/2022'},
                {codigo: '5', tecnico:'Rudielle', cliente:'Cozini', relato:'Balanço com corretor', ativo: true, date:'07/01/2022'}
            ]
        }
    }
}
</script>