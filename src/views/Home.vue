<template>
  <!-- <Carrucel/> -->
  <div>
    <div class="bodycap"></div>
    <!-- <imgfondo v-if="ancho>=880" /> -->
    <!-- <div class="fondo2" v-else></div> -->
      <b-row>
        <b-col md="3">
              <colapsever /> 
             <!-- <colapsever />   -->
        </b-col>
        <b-col md="6"><div ref="altofondo" class="data"></div> </b-col>
        <b-col md="3">
          <!-- <div>

            <div class="dataport">      
            <b-card img-src=""  img-alt="Card image" img-top>     
                <b-card-header header-tag="header" class="p-1" role="tab" end>
                  <b-button block v-b-toggle.accordion-2 variant="success"><b-icon icon="inbox-fill"></b-icon>
                  Videos Institucuonales</b-button>
                </b-card-header>    
              <b-card-text>
            
                < !-- <iframe width="100%"  src="https://www.youtube.com/list=UUA-uViVcw5eRX70yLo1EgUw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -- >
                <iframe src="https://www.youtube.com/embed/videoseries?list=UUA-uViVcw5eRX70yLo1EgUw" width="100%" height="65%" frameborder="0" allow="autoplay"></iframe>
                 El colegio Gimnasio Integral Guatiquia ofrece a la comunidad una
                educación solida basada en principios y valores éticos, morales
                y culturales.
              </b-card-text>
            </b-card>
            </div>
            <br /><br /><br /><br />

          </div> -->
        </b-col>
      </b-row>
      <!-- <div class="nombres" font-scale="8"><p><strong>Presentacion estudiantes grado segundo 2018</strong><br>Estudiantes Gimnasio Integral</p></div> -->

  </div>
</template>

<script>
// import Colapsever from '../components/colapsever.vue';
import Colapsever from '../components/informacion_pincipal.vue';
// import Imgfondo from "../components/Imgfondo.vue";
//import Carrucel from '../components/Carrucel.vue';
//import Carrucel from './components/Carrucel.vue';
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //  Carrucel,
    // Imgfondo,
    Colapsever
  },
  data(){
    return{
      altopage:null,
      ancho:null,
    }
  },
  
  created(){
    console.clear();
    this.imagenportada();
    this.ancho=parseInt(document.documentElement.scrollWidth);
    let altopag=parseInt(document.documentElement.scrollHeight);
    // let altoimagenes=this.$refs.carrucelfondo.scrollHeight;
    if(this.ancho>=1220) this.altopage=altopag;
    if(this.ancho<1220 && this.ancho>=850) this.altopage=10;
    // if(this.ancho>=990) this.altopage=document.documentElement.scrollHeight-610;
    else this.altopage=0;
    this.$refs.altofondo.style.height = this.altopage+"px";
    console.warn("alto pagina",this.altopage);
    console.warn("ancho pagina",this.ancho);
    // console.warn("alto carrucel",altoimagenes);
  },

  methods:{
    async imagenportada(){
      try{  
        const data = await fetch('http://gimnasioguatiquia.42web.io/wp-json/wp/v2/media/?order=desc&search=%22imgportada_%22');
        this.rutas=await data.json();
        console.warn("rutas",this.rutas);
      }catch(e){
        console.warn("Error",e)
      };
    },
    positionFooter(){
      
    }
  }
  
};
</script>
<style scoped>
.data{
  position: relative;
  height: 700px;
}

.fondo2 {
  position: fixed;
  background-image: url("/fondos/fondo.jpeg");
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: -100;
}

@media (max-width: 990px), handheld and (orientation: landscape){  
.data{
  position: relative;
  height: 0px;
}
}

.bodycap{
  position:fixed;
  z-index: -100;
  width: 100%;
  height: 100%;
  background-image: url("../../public/fondos/pagina_principal.jpg");
  background-repeat: no-repeat;
  /* background-size: auto auto; */
  background-size:cover;
  left: 0px;
  top: 0px;
}


/* .dataport{
  width: 495px !important; 
  height: 205px !important;
  right: 0px !important;
}  */
</style>
