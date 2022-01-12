<template>
    <v-container fluid class="content pa-0 ma-0">
        <div class="container">
            <h1 class="title">Técnicos Hypersoft</h1>
            <template>
                <v-card>
                    <v-card-title>
                        <v-row>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Pesquisa rápida"
                            single-line hide-details></v-text-field>
                            <v-col cols="12" sm="2">
                                <v-select :value="itemsPerPage" label="Itens por página" type="number" hide-selected
                                :items="[5, 10, 25]" @input="itemsPerPage = parseInt($event, 10)"></v-select>
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="tecnicos" :search="search" class="elevation-1 mt-5" dense
                    :items-per-page="itemsPerPage" hide-default-footer :page.sync="page" @page-count="pageCount = $event"></v-data-table>
                    <div class="text-center pt-2 pb-2">
                        <v-pagination v-model="page" :length="pageCount"></v-pagination>
                    </div>
                </v-card>
            </template>
            <router-link to="/tecnicos/cadastro/">
                <a type="button" class="btn btn-red mt-5">Cadastrar Técnico</a>
            </router-link>
            <router-link to="/atendimentos/">
                <a type="button" class="btn btn-dark mt-5 ml-2">Voltar</a>
            </router-link>
        </div>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            search: '',
            page: 1,
            pageCount: 0,
            itemsPerPage: 5,
            headers: [
                    {
                        text: '#',
                        align: 'start',
                        sortable: true,
                        value: 'codigo',
                    },
                    { text: 'Nome', value: 'nome' },
                    { text: 'Telefone', value: 'telefone' },
                ],
                tecnicos: [
                    {
                        codigo: '1',
                        nome: 'Daniel',
                        telefone: '(34) 99999-9999',
                    },
                    {
                        codigo: '2',
                        nome: 'Diego',
                        telefone: '(34) 99999-9999',
                    },
                    {
                        codigo: '3',
                        nome: 'Heitor',
                        telefone: '(34) 99999-9999',
                    },
                    {
                        codigo: '4',
                        nome: 'Jaílson',
                        telefone: '(34) 99999-9999',
                    },
                    {
                        codigo: '5',
                        nome: 'Luiz Felipe',
                        telefone: '(34) 99999-9999',
                    },
                    {
                        codigo: '6',
                        nome: 'Rickson',
                        telefone: '(34) 99999-9999',
                    },
                    {
                        codigo: '7',
                        nome: 'Richard',
                        telefone: '(34) 99999-9999',
                    },
                    {
                        codigo: '8',
                        nome: 'Rudielle',
                        telefone: '(34) 99999-9999',
                    }
                ]
        }
    }
}
</script>