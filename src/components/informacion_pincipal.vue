<template>
   <div>
       <div class="divisores2 pl-3" v-show="!dataShow" v-on:click="dataShow=true">
            <h3><span class="icon-arrow-down2" aria-hidden="true" ></span>Mostrar Información</h3>
        </div>
       <div class="contenedorx textcolor" v-show="dataShow" v-on:click="dataShow=false">
            <div class="divisores pl-3" >
                <h3><span class="icon-play" aria-hidden="true"></span> Videos Institucionales</h3>
            </div>
            <b-card-text class="p-2">
            <!-- <iframe width="100%"  src="https://www.youtube.com/list=UUA-uViVcw5eRX70yLo1EgUw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <iframe src="https://www.youtube.com/embed/videoseries?list=UUA-uViVcw5eRX70yLo1EgUw" width="100%" height="240px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                El colegio Gimnasio Integral Guatiquia ofrece a la comunidad una
                educación solida basada en principios y valores éticos, morales
                y culturales.
            </b-card-text>
            <!-- <div class="divisores pl-3">
                <h3><span class="icon-info" aria-hidden="true"></span> Información institucional</h3>
            </div>
            <Colapsever class="m-2" /> -->

            <!-- <div class="divisores pl-3">
                <h3><span class="icon-newspaper" aria-hidden="true"></span> Noticias del Día</h3>
            </div>
            <spam class="m-3">Error conectando contenido de bing news...</spam> -->
        </div>
   </div>
  
</template>

<script>
import Colapsever from '../components/colapsever.vue';
export default {
   components: {
    Colapsever
  },
  data(){
    return{
      dataShow:true,
    }
  },
}
</script>

<style>
.contenedorx{
    position: relative;
    height: 100%;
    width: 100%;
    left: 0px;
    background-color: rgba(99, 99, 90, 0.6);
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 17px;
    transform:translateY(-0px);
}
.textcolor{
    color:blanchedalmond;
}
.divisores{
    color: rgb(77, 71, 71);
    position:relative;
    left: 0;
    background-color: chartreuse;
    border-radius: 16px 16px 0px 0px;
}
.divisores2{
    color: rgb(194, 189, 189);
    position:relative;
    left: 0;
    background-color: rgb(55, 63, 83);
    border-radius: 16px 16px 16px 16px;
}
</style>