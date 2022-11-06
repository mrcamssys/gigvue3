<template>
<div>
  <div class="bodycap"></div>
  <b-container fluid>
    <b-row>
        <b-col md="2">
          <b-list-group>
              <template  >
                <b-list-group-item v-for="contenido of vinculos" :key="contenido.id">
                  <router-link :to="contenido.rura" style="color:#000000;">{{contenido.nombre}}</router-link>
                </b-list-group-item>
              </template>
          </b-list-group>      
        </b-col>
        
        <b-col md="10">
          <historia v-if="$route.params.id==2"/>
          <misionvision v-else-if="$route.params.id==1"/>
          <gobierno v-else-if="$route.params.id==4"/>
          <calidad v-else-if="$route.params.id==5"/>
          <valores v-else-if="$route.params.id==3"/>
        <index v-else/>

        </b-col>

      </b-row>
  </b-container>
</div>
</template>

<script>
import historia from './colegio/Historia.vue'
import misionvision from './colegio/mision_vision.vue'
import valores from './colegio/valores.vue'
import gobierno from './colegio/gobierno.vue'
import calidad from './colegio/calidad.vue'
import index from './colegio/index.vue'
export default {
  components:{
    historia,
    index,
    misionvision,
    valores,
    gobierno,
    calidad
  },
  data(){
    return{
      vinculos:[
        {
          id:1,
          nombre:"Modelo (Objetivo, Misión, Visión)",
          rura:"/colegio/1"
        },{
          id:2,
          nombre:"Historia Institucional",
          rura:"/colegio/2"
        },{
          id:3,
          nombre:"Valores Institucionales",
          rura:"/colegio/3"
        },
        {
          id:4,
           nombre:"Gobierno Escolar",
           rura:"/colegio/4"
        },
        {
           id:5,
           nombre:"Politicas de Calidad",
           rura:"/colegio/5"
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>

.fondocolegio{
  background-color: #F7F9F9;
  width: 100%;
  height: 100%;
}
.bodycap{
  position:fixed;
  z-index: -100;
  width: 100%;
  height: 100%;
  background-image: url("../../public/fondos/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  left: 0px;
  top: 0px;
}
</style>
