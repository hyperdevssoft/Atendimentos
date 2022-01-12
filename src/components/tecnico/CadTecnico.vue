<template>
    <main class="main" id="main">
        <div class="container">
            <h1 class="title">Cadastro de Técnico</h1>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="nome_tecnico" class="form-label">Nome:</label>
                    <v-text-field type="text" id="nome_tecnico" outlined dense v-model="nome" maxlength="255" 
                    :rules="[rules.required, rules.nome]" spellcheck="false"></v-text-field>
                </div>
                <div class="col-md-6">
                    <label for="telefone_tecnico" class="form-label">Telefone:</label>
                    <v-text-field type="text" id="telefone_tecnico" v-model="telefone" maxlength="14" onkeypress="mask(this, mphone)"
                    onblur="mask(this, mphone);" outlined dense :rules="[rules.telefone]"></v-text-field>
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
                    <button type="submit" class="btn btn-red"
                    :disabled="noNome || shortNome || shortTelefone">Cadastrar Técnico</button>
                    <router-link to="/tecnicos">
                        <a class="btn btn-black ml-2"> Voltar</a>
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
            shortTelefone(){
                if(this.telefone.length > 0){
                    return this.telefone.length < 14
                }else{
                    return this.telefone.length > 0
                }
                
            },
            rules(){
                return this.$store.getters.rules
            }
        },
        beforeRouteLeave(to, from, next){
            if(this.nome == '' && this.telefone == ''){
                next()
            }else{
                if(confirm('Seus dados serão perdidos, tem certeza disso ?')){
                    next()
                }else{
                    next(false)
                }
            }
        }
    }
</script>