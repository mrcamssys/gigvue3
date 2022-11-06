<template>
  <mdb-footer class="page-footer font-small ">
    
    <mdb-container class="text-left" style="">
        <div class="iconoscontenido"></div>
        <mdb-row>
          <mdb-col md="12">
            <div>
              <template v-for="(imgs, id) in imgiconos" >
               <a :key="id"  :href="imgrutas[id]" target="_blank">
                <b-img class="iconos"  rounded="0" :src="imgs" ></b-img>
               </a>
              </template>
               <a href="https://www.educacionbogota.edu.co/portal_institucional/servicio-ciudadania2" target="_blank">
                <b-img height="90px"  class="iconos" rounded="0" src="https://www.culturarecreacionydeporte.gov.co/sites/default/files/adjuntos_paginas_2014/logo_bogota_png_byn_rojo-01.png" ></b-img>
               </a>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-container>

<div class="text-white" style="background-color: rgba(0, 0, 0, 0.9);">
  <!-- Grid container -->
  <div class="container">

    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <!-- <h5 class="text-uppercase">Links</h5> -->

          <h3><b-icon icon="base" font-scale="1"></b-icon> Contacto:</h3>
          - Fijo : (601)7151827 <br>
          - Movil : 3192098659 <hr>
          <h5>Direcciones :</h5>
          <ul class="list-unstyled mb-0 mr-1">
            <li>* Sede principal A. Calle 59 A sur No. 45 D -02/08  Bogotá D.C.</li>
            <li>* Sede B. Calle 59 A sur No. 46 – 27. </li>
            <li>* Sede C. Carrera 47 No 59 A – 18 sur.</li>
          </ul>
          
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h3><b-icon icon="e942" font-scale="1"></b-icon> Servicios:</h3>
La institución presta unos servicios extracurriculares aprovechando el tiempo libre de los estudiantes como lo son:
          <ul class="list-unstyled mb-0">
            <li> * Artes (música).</li>
            <li>* Deporte (Artes marciales – Hapkido).</li>
            <li>* Idioma Extrangero (ingles).</li>
            <li>* Gimnasia.</li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h3><b-icon icon="e942" font-scale="1"></b-icon>Bienestar Institucional: </h3>

Pensando en el bienestar de toda la comunidad, nuestra institución presta los servicios de :

          <ul class="list-unstyled mb-0">
            <li>* Psico - orientación.</li>
            <li>* Fonoaudiología </li>
            <li>* Biblioteca</li>
            <li>* Escuela de padres</li>
            <li>* Tienda escolar</li>
            <li>* Sala de informática</li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h3>Mapa Ubicación:</h3>

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7954.199772910398!2d-74.152585!3d4.576077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77a1ed68f6298897!2sGimnasio%20Integral%20Guatiquia!5e0!3m2!1ses-419!2sco!4v1648965460672!5m2!1ses-419!2sco" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    <div class="container">
      <section class="">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <small>
            <b>Secretaria General:</b><br>
              <a href="smb://soporteadministrativo@gimnasioguatiquia.edu.co">soporteadministrativo@gimnasioguatiquia.edu.co</a><br>
              horario Atención: 6:30 AM a 2:20PM -- lunes a viernes.<br>
            </small>
          </div>

          <div class="col-lg-4 col-md-6 mb-4 mb-md-0"> 
            <small>
              <b>© Copyright: Gimnasio Integral Guatiquia 2022.</b><br>
              Desarrollo: Lic. Carlos A. Moreno S. <br>
              informacion: <a href="https://www.linkedin.com/in/carlos-arturo-moreno-susatama-36069955" target="__blank">Linkedin Contacto</a>
            </small>
          </div>
          
          <div class="contenedor-imagenes col-lg-4 col-md-6 mb-4 mb-md-0">
            <img  :src="baseUrl()+'logos/loder.png'" class="logo" style="width: 90px;"/> 
            <img :src="baseUrl()+'logos/minedu.png'" />
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- Copyright -->
</div>
<!-- Footer -->

  </mdb-footer>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  data(){
    return{
      rutas:{},
      imgiconos:[
        'https://phet.colorado.edu/images/phet-social-media-logo.png',
        'https://www.tinkercad.com/img/favicon.ico',
        "https://www.biblored.gov.co/sites/default/files/Logo-BibloRed.png",
        "https://www.valoraanalitik.com/wp-content/uploads/2019/11/MIN-TIC.png"
        ],
      imgrutas:[
        'https://phet.colorado.edu/es/simulations/browse',
        'https://www.tinkercad.com/',
        'https://www.biblored.gov.co/BibloRed-en-mi-Casa',
        'https://www.mintic.gov.co/portal/inicio/Atencion-al-Publico/Informacion-para/Sector-Academico/',
        ]
    }
  },
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  },
  methods: {
    baseUrl() {
			return process.env.BASE_URL;
		},

    nuevaruta(ruta) {
      window.open(ruta, "_blank");
    }
  }
  
};
</script>

<style scoped>
/* .divfondo{
  background-image: url('https://i.pinimg.com/originals/ce/10/5f/ce105fda85be60e90b3fec3a1a43b799.jpg') !important;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.loder {
  width: 80px;
}
.stylish {
  background-color: rgb(45, 45, 46) !important;
  color: darkgray;
}
.data1 {
  background-color: rgb(26, 26, 27) !important;
  color: darkgray;
} */

.iconos{
  padding: 15px;
  height: 80px;
  filter: grayscale(95%);
}
.iconos:hover{
  padding: 15px;
  height: 100px;
  filter: grayscale(0%);
}


.page-footer{
    position: absolute;
    margin-bottom: 0;
    width:100% !important;
    background-color:rgb(221, 221, 221) !important;
    z-index: -15 !important;
}

.contenedor-imagenes {
  display: flex;
}

.contenedor-imagenes img:first-child {
  margin-right: 10px;
}

/* @media (max-width: 990px), handheld and (orientation: landscape){  
  .divfondo{
    background-image: url('https://i.pinimg.com/originals/ce/10/5f/ce105fda85be60e90b3fec3a1a43b799.jpg') !important;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}


@media (max-width: 770px) {  
  .iconoscontenido{
    left: 0%;
    z-index: -5; 
    width:100%;
    height: 100%;
    background-color: #fff; 
    opacity: 1;
  }
  
} */

</style>