<template>
    <main id="main">
        <div class="container mt-5">
            <h1 class="title mt-5">Editar Atendimento</h1>
            <form class="row g-3 mt-5">
                <div class="col-md-6">
                    <label for="selectTecnico" class="form-label">Técnico</label>
                    <v-select :items="tecnicos" outlined dense placeholder="Selecione o Tecnico" v-model="tecnico"></v-select>
                </div>
                <div class="col-md-6">
                    <label for="client" class="form-label">Cliente / Razão Social</label>
                    <v-select :items="clientes" outlined dense placeholder="Selecione o Cliente" v-model="cliente"></v-select>
                </div>
                <div class="col-12">
                    <label for="relato" class="form-label">Relato</label>
                    <textarea class="form-control" id="relato" rows="5" v-model="relato"></textarea>
                </div>
                <div class="col-md-6">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" @click="ativo = true"/>
                        <input class="form-check-input" type="radio" checked name="inlineRadioOptions" id="inlineRadio1" 
                        value="1" @click="ativo = true" v-if="$route.query.atendimento.ativo == true"/>
                        <label class="form-check-label" for="inlineRadio1">Ativo</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" @click="ativo = false"/>
                        <input class="form-check-input" type="radio" checked name="inlineRadioOptions" id="inlineRadio2" 
                        value="0" @click="ativo = false" v-if="$route.query.atendimento.ativo == false"/>
                        <label class="form-check-label" for="inlineRadio2">Inativo</label>
                    </div>
                </div>
                <div class="col-12 mt-5">
                    <button type="submit" class="btn btn-red mr-2" 
                    :disabled="noTecnico || tecnicoNotSelected || noCliente || noRelato || noAtivo || clienteNotSelected || shortRelato">
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
export default {
    props:['codigo'],
    data(){
        return{
            tecnicos:['Daniel', 'Diego', 'Heitor', 'Jaílson', 'Luiz Felipe', 'Rudielle', 'Richard', 'Rickson'],
            clientes:['Polo Norte', 'Mega Leite', 'Leal', 'Udipres', 'Cozini'],
            tecnico: this.$route.query.atendimento.tecnico,
            cliente: this.$route.query.atendimento.cliente,
            relato: this.$route.query.atendimento.relato,
            ativo: this.$route.query.atendimento.ativo,
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