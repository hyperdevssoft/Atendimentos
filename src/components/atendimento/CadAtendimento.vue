<template>
    <main id="main">
        <div class="container mt-5">
            <h1 class="title mt-5">Cadastrar Atendimento</h1>
            <form class="row g-3 mt-5">
                <div class="col-md-6">
                    <label for="selectTecnico" class="form-label">Técnico</label>
                    <v-select :items="tecnicos" outlined dense placeholder="Selecione o Técnico" v-model="tecnico"></v-select>
                </div>
                <div class="col-md-6">
                    <label for="client" class="form-label">Cliente / Razão Social</label>
                    <v-select :items="clientes" outlined dense placeholder="Selecione o Cliente" v-model="cliente"></v-select>
                </div>
                <div class="col-12">
                    <label for="relato" class="form-label">Relato</label>
                    <v-textarea id="relato" rows="5" v-model="relato" maxlength="399" :rules="[rules.relato, rules.required]" outlined></v-textarea>
                </div>
                <div class="col-12 mt-5">
                    <button type="submit" class="btn btn-red"
                    :disabled="noTecnico || tecnicoNotSelected || noCliente || noRelato ||
                    clienteNotSelected || shortRelato">Gravar Atendimento</button>
                    <router-link to="/atendimentos">
                        <a class="btn btn-black ml-2"> Voltar </a>
                    </router-link>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return {
                tecnico: 'Selecione o Técnico',
                cliente: 'Selecione o Cliente',
                relato: '',
                tecnicos:['Daniel', 'Diego', 'Heitor', 'Jaílson', 'Luiz Felipe', 'Rudielle', 'Richard', 'Rickson'],
                clientes:['Polo Norte', 'Mega Leite', 'Leal', 'Udipres', 'Cozini'],
                ativo: null
            }
        },
        computed:{
            noTecnico(){
                return this.tecnico == ""
            },
            tecnicoNotSelected(){
                return this.tecnico == "Selecione o Técnico"
            },
            noCliente(){
                return this.cliente == ""
            },
            clienteNotSelected(){
                return this.cliente == "Selecione o Cliente"
            },
            noRelato(){
                return this.relato == ""
            },
            shortRelato(){
                if(this.relato.length > 0){
                    return this.relato.length < 10
                }else{
                    return this.relato.length > 0
                }
            },
            noAtivo(){
                return this.ativo == null
            },
            rules(){
                return this.$store.getters.rules
            }
        }
    }
</script>