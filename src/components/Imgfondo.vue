<template>
  <div class="fondo">
    <b-overlay :show="show" rounded="sm">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="100%"
        img-height="100%"
        ref="carrucelfondo"
      >
        <!-- <b-carousel-slide img-src="http://gimnasioguatiquia.42web.io/wp-content/uploads/2022/03/base1.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="http://gimnasioguatiquia.42web.io/wp-content/uploads/2022/03/base2.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="http://gimnasioguatiquia.42web.io/wp-content/uploads/2022/03/base3.jpg"></b-carousel-slide> -->
        <template v-for="(data,id) in rutas" v-bind="id">
        <b-carousel-slide :key="id" :img-src="data.guid.rendered"></b-carousel-slide>
        </template>

      </b-carousel>
      
        <!-- <b-card v-for="(data) in rutas" v-bind="id"
            :title="data.guid.rendered"
            :img-src="data.guid.rendered"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            :key="id"
        /> -->
        
    </div>

    </b-overlay>
  </div>
</template>

<script>
export default {
  name: "ImagenesFondo",
  data(){
    return{
      show:true,
      rutas:[],
    }
  },
  
  mounted(){
    this.imagenportada();
  },

  methods:{
    async imagenportada(){
      try{  
        const data = await fetch('http://gimnasioguatiquia.42web.io/wp-json/wp/v2/media/?order=desc&search=%22imgportada_%22');
        this.rutas=await data.json();
        console.warn("rutas",this.rutas);
        this.show=false;
      }catch(e){
        console.warn("Error",e)
      };
    }
  }

};
</script>

<style>
.fondo {
  position: fixed;
  
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: -100;
}
</style>
