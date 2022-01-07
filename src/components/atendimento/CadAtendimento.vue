<template>
    <main id="main">
        <div class="container mt-5">
            <h1 class="title mt-5">Cadastrar Atendimento</h1>
            <form class="row g-3 mt-5">
                <div class="col-md-6">
                    <label for="selectTecnico" class="form-label">Técnico</label>
                    <select class="form-control" v-model="tecnico" id="selectTecnico">
                        <option selected>Selecione o Técnico</option>
                        <option v-for="(tecnico, i) in tecnicos" :key="i">{{tecnico}}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="client" class="form-label">Cliente / Razão Social</label>
                    <select class="form-control" v-model="cliente" id="selectCliente">
                        <option selected>Selecione o Cliente</option>
                        <option v-for="(cliente, i) in clientes" :key="i">{{cliente}}</option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="relato" class="form-label">Relato</label>
                    <textarea class="form-control" id="relato" rows="5" v-model="relato" maxlength="399"></textarea>
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
                    :disabled="noTecnico || tecnicoNotSelected || noCliente || noRelato || noAtivo || 
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
                return this.relato < 15
            },
            noAtivo(){
                return this.ativo == null
            }
        }
    }
</script>