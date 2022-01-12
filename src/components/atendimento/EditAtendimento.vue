<template>
    <main id="main">
        <div class="container mt-5">
            <h1 class="title mt-5">Editar Atendimento</h1>
            <form class="row g-3 mt-5">
                <div class="col-md-6">
                    <v-layout justify-space-between>
                        <label for="selectTecnico" class="form-label">Técnico</label>
                        <v-dialog v-model="cadTecDialog" persistent max-width="600px">
                            <template v-slot:activator="{on, attrs}">
                                <span class="btn-dialog" v-bind="attrs" v-on="on">Deseja criar um novo Técnico ?</span>
                            </template>
                            <CadTecAtend></CadTecAtend>
                        </v-dialog>
                    </v-layout>
                    <v-select :items="tecnicos" outlined dense placeholder="Selecione o Tecnico" v-model="tecnico"
                    hide-selected></v-select>
                </div>
                <div class="col-md-6">
                    <v-layout justify-space-between>
                        <label for="client" class="form-label">Cliente / Razão Social</label>
                        <v-dialog v-model="cadCliDialog" persistent max-width="600px">
                            <template v-slot:activator="{on, attrs}">
                                <span class="btn-dialog" v-bind="attrs" v-on="on">Deseja criar um novo Cliente ?</span>
                            </template>
                            <CadCliAtend></CadCliAtend>
                        </v-dialog>
                    </v-layout>
                    <v-select :items="clientes" outlined dense placeholder="Selecione o Cliente" v-model="cliente"
                    hide-selected></v-select>
                </div>
                <div class="col-12">
                    <label for="relato" class="form-label">Relato</label>
                    <v-textarea id="relato" rows="5" v-model="relato" :rules="[rules.relato, rules.required]" 
                    maxlength="399" outlined spellcheck="false"></v-textarea>
                </div>
                <div class="col-12 mt-5">
                    <button type="submit" class="btn btn-red mr-2" 
                    :disabled="noTecnico || tecnicoNotSelected || noCliente || clienteNotSelected || shortRelato || noRelato">
                        Atualizar Atendimento
                    </button>
                    <router-link to="/atendimentos" tag="button">
                        <a class="btn btn-dark"> Voltar </a>
                    </router-link>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
const CadTecAtend = () => import('../templates/dialogs/CadTecAtend')
const CadCliAtend = () => import('../templates/dialogs/CadClienteAtend.vue')

export default {
    props:['codigo'],
    components:{
        CadTecAtend,
        CadCliAtend
    },
    data(){
        return{
            tecnicos:['Daniel', 'Diego', 'Heitor', 'Jaílson', 'Luiz Felipe', 'Rudielle', 'Richard', 'Rickson'],
            clientes:['Polo Norte', 'Mega Leite', 'Leal', 'Udipres', 'Cozini'],
            tecnico: this.$route.query.atendimento.tecnico,
            cliente: this.$route.query.atendimento.cliente,
            relato: this.$route.query.atendimento.relato,
            ativo: this.$route.query.atendimento.ativo,
            rel: ''
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
        },
        cadCliDialog:{
            get(){
                return this.$store.getters.cadCliDialog
            },
            set(cadCliDialog){
                this.$store.commit('setCadCliDialog', cadCliDialog)
            }
        },
        cadTecDialog:{
            get(){
                return this.$store.getters.cadTecDialog
            },
            set(cadTecDialog){
                this.$store.commit('setCadTecDialog', cadTecDialog)
            }
        }
    },
    beforeRouteLeave(to, from, next){
        if(this.relato == '' && this.tecnico == '' && this.cliente == ''){
            next()
        }else{
            if(confirm('Seus dados serão perdidos. Tem certeza ?')){
                next()
            }else{
                next(false)
            }
        }
    }
}
</script>