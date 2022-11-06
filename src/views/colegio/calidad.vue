<template>
    
<diV class="p-4">
    
    <h1 class="titulo">Politicas de Gestion y Calidad Institucional</h1>

    <div class="card text-dark bg-light mb-3">
        <div class="card-header">Descripción</div>
        <div class="card-body">
            <p class="card-text">La institución busca satisfacer las necesidades y expectativas de la comunidad beneficiada, ofreciendo una formación académica acorde a los 
                lineamientos del <b><em>Ministerio de Educación Nacional</em></b>, bajo los criterios de alta calidad que presenta la <b><em>Secretaria de Educación del Distrito Capital</em></b>,
                esto presentar a la comunidad la implementación de un sistema de gestión y calidad estandarizado en un proyecto educativo institucional que se presenta en esta sección.
            </p>
        </div>
    </div>

    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Objetivos</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">PEI</button>
            <!-- <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button> -->
        </div>
        </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <b-alert show dismissible>
                Este contenido aun se esta actualizando con la institución
            </b-alert>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">2...</div>
        <!-- <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">3...</div> -->
    </div>

</diV>
</template>

<script>

export default {
 name: "Menux",
  data() {
    return {

    };
  },
  methods: {
    baseUrl() {
	    return process.env.BASE_URL;
	},


  }
}
</script>

<style>
.titulo{

    background: linear-gradient(to right, rgb(56, 107, 67), white);
    color: #d3d3d3;
    padding: 5px;
    top: 0px;
    left: 0px;

}
</style>