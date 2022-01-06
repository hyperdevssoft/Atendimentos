<template>
    <main id="main">
        <div class="container mt-5">
            <h1 class="title mt-5">Atendimentos Hypersoft</h1>
            <table class="table mt-5 mb-4">
                <thead>
                    <tr>
                        <th scope="col-1">#</th>
                        <th scope="col-1">Técnico</th>
                        <th scope="col-1">Cliente / Razão Social</th>
                        <th scope="col-2">Relato</th>
                        <th scope="col-1">Data</th>
                        <th scope="col-1">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Rickson</td>
                        <td>Neto - Polo Norte</td>
                        <td>Emissão de Certificado Digital</td>
                        <td>04/01/2022</td>
                        <td>
                            <a class="edit" href="/pages/editar-atendimento.html">
                                <i class="fas fa-edit"></i> Editar
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Rickson</td>
                        <td>Neto - Polo Norte</td>
                        <td>Emissão de Certificado Digital</td>
                        <td>04/01/2022</td>
                        <td>
                            <a class="edit" href="/pages/editar-atendimento.html">
                                <i class="fas fa-edit"></i> Editar
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Rickson</td>
                        <td>Neto - Polo Norte</td>
                        <td>Emissão de Certificado Digital</td>
                        <td>04/01/2022</td>
                        <td>
                            <a class="edit" href="/pages/editar-atendimento.html">
                                <i class="fas fa-edit"></i> Editar
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <router-link to="/atendimentos/cadastro/">
                <a type="button" class="btn btn-red">Cadastrar Atendimento</a>
            </router-link>
        </div>
    </main>
</template>