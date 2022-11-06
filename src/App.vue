<template>
  <div id="app">
    <menux />
    <template>
      <b-container fluid >
        <br />
        <div class="social-bar">
          <a href="https://www.facebook.com/gimnasioguatiquia.edu.co" class="icon icon-facebook" target="_blank"></a>
          <a href="https://twitter.com/GGuatiquia" class="icon icon-twitter" target="_blank"></a>
          <a href="https://www.youtube.com/channel/UCA-uViVcw5eRX70yLo1EgUw" class="icon icon-youtube" target="_blank"></a>
          <!-- <a href="https://api.whatsapp.com/send?phone=573192098659&app=facebook&entry_point=page_cta&fbclid=IwAR3_JrkhZ3_PrRMcdBkXuKZ4cWh1PKDE2LEnfVQj82pzyS0C6oRpdlU0rIU" class="icon icon-whatsapp" target="_blank">Whatsapp</a>  -->
        </div>
        <router-view />
      </b-container>
    </template>
    <piepagina/>
  </div>
</template>

<script>
let root=this;
import Menux from "./components/Menux.vue";
import Piepagina from "./components/Piepagina.vue";
export default {
  components: { Menux, Piepagina },
  data(){
    return{
      
    }
  },
  
  mounted(){
    
  },
};
</script>

<style>
.logo {
  width: 180px;
  padding: 15px;
}
body {
  /*font-family: "Allan", cursive;*/
  font-family: 'Alegreya', serif;

}
</style>
