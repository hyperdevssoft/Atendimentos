<template>
    <main class="main mt-5" id="main">
        <div class="container">
            <h1 class="title">Cadastrar Cliente</h1>
            <form class="row g-3 mt-5">
                <div class="col-md-6">
                    <label for="nome_cliente" class="form-label">Nome:</label>
                    <input type="text" class="form-control text-captalize" id="nome_cliente" v-model="nome" maxlength="255"/>
                </div>
                <div class="col-md-6">
                    <label for="telefone_cliente" class="form-label">Telefone:</label>
                    <input type="text" class="form-control" id="telefone_cliente" v-model="telefone" maxlength="15" 
                    onkeypress="mask(this, mphone);" onblur="mask(this, mphone);">
                </div>
                <div class="col-md-6">
                    <label for="nome_fantasia" class="form-label">Nome Fantasia:</label>
                    <input type="text" class="form-control" id="nome_fantasia" v-model="fantasia" maxlength="255"/>
                </div>
                <div class="col-md-6">
                    <label for="cnpj" class="form-label">CNPJ:</label>
                    <input type="text" class="form-control" id="cnpj" v-model="cnpj" 
                    name="cpfcnpj" onkeypress='mascaraMutuario(this, cpfCnpj)' onblur='clearTimeout()'/>
                </div>
                <div class="col-md-6">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" @click="ativo = true"/>
                        <label class="form-check-label" for="inlineRadio1">Ativo</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" @click="ativo = false"/>
                        <label class="form-check-label" for="inlineRadio2">Inativo</label>
                    </div>
                </div>
                <div class="col-12 mt-5">
                    <button class="btn btn-red" :disabled="noNome || noTelefone || noFantasia || noAtivo || 
                    shortCpnj || shortNome || shortTelefone || shortFantasia">Cadastrar Cliente</button>
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
            ativo: null,
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
            return this.telefone.length < 14
        },
        noFantasia(){
            return this.fantasia == ''
        },
        shortFantasia(){
            return this.fantasia.length < 3
        },
        shortCpnj(){
            return this.cnpj.length < 14
        },
        noAtivo(){
            return this.ativo == null
        }
    },
}
</script>