<template>
    <v-container fluid class="content pa-0 ma-0">
            <div class="content-img">
                <div>
                    <v-img src="../../assets/imgs/logos/logo.png" max-width="600px"></v-img>
                </div>
            </div>
                <div class="content-form">
                    <v-card flat class="form" color="transparent" justify-center>
                        <v-card-title>
                            <v-layout justify-start align-center>
                                <span class="form-title">Bem vindo a Hypersoft Atendimentos</span>
                                <div class="ml-5">
                                    <v-img src="https://img.icons8.com/fluent/50/000000/service.png"></v-img>
                                </div>
                            </v-layout>
                        </v-card-title>
                        <v-card-text>
                            <v-form>
                                <v-container fluid>
                                    <v-row>
                                        <v-select :items="tecnicos" label="Técnico" v-model="tecnico" outlined color="red darken-1"></v-select>
                                    </v-row>
                                    <v-row>
                                        <v-btn block color="red darken-1" class="red-btn" :disabled="noSelect">Entrar</v-btn>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </div>
        </v-container>
</template>

<script>
export default {
    data(){
        return{
            tecnico: '',
            tecnicos: ['Daniel', 'Diego', 'Heitor', 'Jaílson', 'Luiz Felipe', 'Rudielle', 'Richard', 'Rickson']
        }
    },
    methods:{
        loadTecnicos(){
            this.$store.dispatch('loadTecnicos')
        }
    },
    computed:{
        noSelect(){
            return this.tecnico == ''
        }
    },
    created(){
        this.loadTecnicos()
    }
}
</script>