<template>
    <v-card>
        <v-card-title class="form-title">
            <span>Cadastro de Técnico</span>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="6">
                    <label for="nome_tecnico" class="form-label">Nome:</label>
                    <v-text-field type="text" id="nome_tecnico" outlined dense v-model="nome" maxlength="255" 
                    :rules="[rules.required, rules.nome]"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <label for="telefone_tecnico" class="form-label">Telefone:</label>
                    <v-text-field type="text" id="telefone_tecnico" v-model="telefone" maxlength="15" onkeypress="mask(this, mphone)"
                    onblur="mask(this, mphone);" outlined dense :rules="[rules.telefone]"></v-text-field>
                </v-col>
            </v-row>
            <div class="col-12 mt-5">
                <button type="submit" class="btn btn-red" @click="cadTecDialog = false"
                :disabled="noNome || shortNome || shortTelefone">Cadastrar Técnico</button>
                <a class="btn btn-black ml-2" @click="cadTecDialog = false"> Voltar </a>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            nome: '',
            telefone: '',
            ativo: true
        }
    },
    computed:{
        noNome(){
            return this.nome == ''
        },
        shortNome(){
            return this.nome.length < 3
        },
        noTelefone(){
            return this.telefone == ''
        },
        shortTelefone(){
            if(this.telefone.length > 0){
                return this.telefone.length < 15
            }else{
                return this.telefone.length > 0
            }
            
        },
        noAtivo(){
            return this.ativo == null
        },
        rules(){
            return this.$store.getters.rules
        },
        cadTecDialog:{
            get(){
                return this.$store.getters.cadTecDialog
            },
            set(cadTecDialog){
                this.$store.commit('setCadTecDialog', cadTecDialog)
            }
        }
    }
}
</script>