<template>
    <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <router-link class="navbar-brand" to="/atendimentos">
                    <img src="../../../assets/imgs/logos/logo-hypersoft.svg" width="150" alt="Logo Hypersoft" class="img-fluid"/>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navCustom collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item mr-2">
                            <router-link to="/atendimentos/" class="link">
                                <div class="bar-list-item">
                                    <v-icon color="red darken-1">mdi-home-outline</v-icon>
                                    <a class="nav-link" aria-current="page">
                                        <router-link to="/atendimentos/" class="link" active-class="link-active">
                                            Atendimentos
                                        </router-link>
                                    </a>
                                </div>
                            </router-link>
                        </li>
                        <li class="nav-item mr-2">
                            <router-link to="/tecnicos/cadastro" class="link">
                                <div class="bar-list-item">
                                    <v-icon color="red darken-1">mdi-face-agent</v-icon>
                                    <a class="nav-link">
                                        <router-link to="/tecnicos/cadastro/" class="link" active-class="link-active">
                                            Cadastro Técnico
                                        </router-link>
                                    </a>
                                </div>
                            </router-link>
                        </li>
                        <li class="nav-item mr-2">
                            <router-link to="/clientes/cadastro" class="link">
                                <div class="bar-list-item">
                                    <v-icon color="red darken-1">mdi-account-group-outline</v-icon>
                                    <a class="nav-link" >
                                        <router-link to="/clientes/cadastro/" class="link" active-class="link-active">
                                            Cadastro Cliente
                                        </router-link>
                                    </a>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
</template>