<template>
    <v-container fluid class="content pa-0 ma-0">
        <div class="container mt-5">
            <h1 class="title mt-5">Clientes Hypersoft</h1>
            <template>
                <v-card>
                    <v-card-title>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Pesquisa rápida"
                        single-line hide-details></v-text-field>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="clientes" :search="search"
                    :items-per-page="5" class="elevation-1 mt-5"></v-data-table>
                </v-card>
            </template>
            <router-link to="/clientes/cadastro/">
                <a type="button" class="btn btn-red mt-5">Cadastrar Cliente</a>
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
                search:'',
                headers: [
                    {text: '#', align: 'start', sortable: true, value: 'codigo'},
                    { text: 'Nome', value: 'nome' },
                    { text: 'Fantasia', value: 'fantasia' },
                    { text: 'Telefone', value: 'telefone' },
                    { text: 'CNPJ', value: 'cnpj' }
                ],
                clientes: [
                    {
                        codigo: '1',
                        nome: 'Polo Norte',
                        fantasia: 'Polo Norte',
                        telefone: '(34) 3411-1544',
                        cnpj: '11.111.111/1111-11'
                    },
                    {
                        codigo: '2',
                        nome: 'Mega Leite',
                        fantasia: 'Mega Leite',
                        telefone: '(34) 3411-6699',
                        cnpj: '11.000.000/0000-00'
                    },
                    {
                        codigo: '3',
                        nome: 'Udipres',
                        fantasia: 'Udipres',
                        telefone: '(34) 3411-2255',
                        cnpj: '00.000.000/0000-00'
                    },
                    {
                        codigo: '4',
                        nome: 'Leal',
                        fantasia: 'Leal',
                        telefone: '(34) 3411-8866',
                        cnpj: '11.111.111/1111-11'
                    },
                    {
                        codigo: '5',
                        nome: 'Cozini',
                        fantasia: 'Cozini',
                        telefone: '(34) 3411-0077',
                        cnpj: '11.111.111/1111-11'
                    }
                ]
            }
        }
    }
</script>