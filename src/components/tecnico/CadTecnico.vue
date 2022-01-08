<template>
    <main class="main mt-5" id="main">
        <div class="container">
            <h1 class="title">Cadastro de Técnico</h1>
            <form class="row g-3 mt-5">
                <div class="col-md-6">
                    <label for="nome_tecnico" class="form-label">Nome:</label>
                    <input required type="text" class="form-control" id="nome_tecnico" v-model="nome" maxlength="255"/>
                </div>
                <div class="col-md-6">
                    <label for="telefone_tecnico" class="form-label">Telefone:</label>
                    <input required type="text" class="form-control" id="telefone_tecnico" v-model="telefone" maxlength="15"
                    onkeypress="mask(this, mphone);" onblur="mask(this, mphone);"/>
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
                    <button type="submit" class="btn btn-red"
                    :disabled="noNome || noTelefone || noAtivo || shortNome || shortTelefone">Cadastrar Técnico</button>
                    <router-link to="/tecnicos">
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
            return{
                nome: '',
                telefone: '',
                ativo: null
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
            noAtivo(){
                return this.ativo == null
            }
        }
    }
</script>