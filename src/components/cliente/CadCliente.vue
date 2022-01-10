<template>
    <main class="main mt-5" id="main">
        <div class="container">
            <h1 class="title">Cadastrar Cliente</h1>
            <form class="row g-3 mt-5">
                <div class="col-md-6">
                    <label for="nome_cliente" class="form-label">Nome:</label>
                    <v-text-field type="text" id="nome_cliente" outlined dense
                    v-model="nome" max-length="255" :rules="[rules.required, rules.nome]"></v-text-field>
                </div>
                <div class="col-md-6">
                    <label for="telefone_cliente" class="form-label">Telefone:</label>
                    <v-text-field type="text" id="telefone_cliente" v-model="telefone" maxlength="14" onkeypress="mask(this, mphone);"
                    onblur="mask(this, mphone);" :rules="[rules.telefone]" dense outlined></v-text-field>
                </div>
                <div class="col-md-6">
                    <label for="nome_fantasia" class="form-label">Nome Fantasia:</label>
                    <v-text-field type="text" id="fantasia_cliente" outlined dense v-model="fantasia" maxlength="255" 
                    :rules="[rules.required, rules.nome]"></v-text-field>
                </div>
                <div class="col-md-6">
                    <label for="cnpj" class="form-label">CNPJ:</label>
                    <v-text-field type="text" outlined dense v-model="cnpj" maxlength="14" id="cnpj_cliente"
                    :rules="[rules.cnpj]"></v-text-field>
                </div>
                <div class="col-md-6">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" @click="ativo = true" checked/>
                        <label class="form-check-label" for="inlineRadio1">Ativo</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" @click="ativo = false"/>
                        <label class="form-check-label" for="inlineRadio2">Inativo</label>
                    </div>
                </div>
                <div class="col-12 mt-5">
                    <button class="btn btn-red" :disabled="noNome || noFantasia || shortNome || shortCnpj ||
                    shortTelefone || shortFantasia">Cadastrar Cliente</button>
                    <router-link to="/clientes/">
                        <a class="btn btn-dark ml-2"> Voltar </a>
                    </router-link>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            nome: '',
            telefone: '',
            fantasia: '',
            cnpj: '',
            ativo: null
        }
    },
    computed:{
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
        },
        rules(){
            return this.$store.getters.rules
        }
    },
}
</script>