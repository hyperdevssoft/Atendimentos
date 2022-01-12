<template>
    <v-container fluid class="page pa-0 ma-0">
        <div class="img-container">
            <div>
                <v-img src="../../assets/imgs/logos/logo-hypersoft.svg" ></v-img>
            </div>
        </div>
        <div class="form-container">
            <v-card flat class="form" color="transparent">
                <v-card-title class="mb-5">
                    <v-layout justify-start align-center>
                        <span class="form-title">Bem vindo a Hypersoft Atendimentos!</span>
                        <div class="ml-2">
                            <v-img src="https://img.icons8.com/plasticine/48/000000/customer-support.png" max-width="40px"></v-img>
                        </div>
                    </v-layout>
                    <span class="form-subtitle mt-3"> Mais do que desenvolver sistemas, nós criamos soluções!</span>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container fluid>
                            <v-row>
                                <v-select dense :items="tecnicos" placeholder="Técnico" v-model="tecnico" outlined></v-select>
                            </v-row>
                            <v-row>
                                <v-btn block color="red darken-1" class="btn" :disabled="noSelect" to="/atendimentos">Entrar</v-btn>
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
    }
}
</script>