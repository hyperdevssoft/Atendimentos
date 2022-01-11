<template>
    <v-card>
        <v-card-title>
            <span>Cadastro de Cliente</span>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="6">
                    <label for="nome_cliente" class="form-label">Nome:</label>
                    <v-text-field type="text" id="nome_cliente" outlined dense
                    v-model="nome" max-length="255" :rules="[rules.required, rules.nome]"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <label for="telefone_cliente" class="form-label">Telefone:</label>
                    <v-text-field type="text" id="telefone_cliente" v-model="telefone" maxlength="14" onkeypress="mask(this, mphone);"
                    onblur="mask(this, mphone);" :rules="[rules.telefone]" dense outlined></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <label for="nome_fantasia" class="form-label">Nome Fantasia:</label>
                    <v-text-field type="text" id="fantasia_cliente" outlined dense v-model="fantasia" maxlength="255" 
                    :rules="[rules.required, rules.nome]"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <label for="cnpj" class="form-label">CNPJ:</label>
                    <v-text-field type="text" outlined dense v-model="cnpj" maxlength="14" id="cnpj_cliente"
                    :rules="[rules.cnpj]"></v-text-field>
                </v-col>
            </v-row>
            <div class="col-12">
                <button class="btn btn-red" :disabled="noNome || noFantasia || shortNome || shortCnpj ||
                shortTelefone || shortFantasia" @click="cadAtendDialog = false">Cadastrar Cliente</button>
                <a class="btn btn-dark ml-2" @click="cadAtendDialog = false"> Voltar </a>
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
            fantasia: '',
            cnpj: '',
            ativo: true
        }
    },
    computed:{
        cadAtendDialog:{
            get(){
                return this.$store.getters.cadAtendDialog
            },
            set(cadAtendDialog){
                this.$store.commit('setCadCliDialog', cadAtendDialog)
            }
        },
        rules(){
            return this.$store.getters.rules
        },
        shortCnpj(){
            if(this.cnpj.length > 0){
                return this.cnpj.length < 14
            }else{
                return this.cnpj.length > 0
            }
        },
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
                return this.telefone.length < 14
            }else{
                return this.telefone.length > 0
            }
            
        },
        noFantasia(){
            return this.fantasia == ''
        },
        shortFantasia(){
            if(this.fantasia.length > 0){
                return this.fantasia.length < 3
            }else{
                return this.fantasia.length > 0
            }
        },
        noAtivo(){
            return this.ativo == null
        }
    }
}
</script>