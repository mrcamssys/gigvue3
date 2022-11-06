<template>
  <div class="accordion" role="tablist">

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" end>
        <b-button block v-b-toggle.accordion-2 variant="info">
          <b-icon icon="inbox-fill"></b-icon> Admisiones GIG</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div v-html="dato.excerpt.rendered"></div>
            
            <b-img :src="datoepimg" fluid alt="Fluid image"></b-img>
          <b-button :href="dato.guid.rendered" size="lg" block variant="warning">Más Información</b-button>
          </b-card-text>
        </b-card-body> 
      </b-collapse>
    </b-card>
    
    
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" end>
        <b-button block v-b-toggle.accordion-1 variant="info">
            <b-icon icon="inbox-fill"></b-icon> Información Institucional</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div v-html="datocom.excerpt.rendered"></div>
            
            <b-img :src="datoepimgcom" fluid alt="Fluid image"></b-img>
          <b-button :href="datocom.guid.rendered" size="lg" block variant="warning">Más Información</b-button>
          </b-card-text>
        </b-card-body> 
                
      </b-collapse>
    </b-card>

    

    <!--<b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab" end>
        <b-button block v-b-toggle.accordion-3 variant="info"><b-icon icon="inbox-fill"></b-icon> Comunicados Rectoria</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card> -->
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        dato:{},
        datoimg:{},
        datoepimg:{},
        imagen:{},

        datocom:{},
        datoimgcom:{},
        datoepimgcom:{},
        imagencom:{},
        text:`Error en la lectura temporal de datos consultar con el administrador.`
      }
    },
  mounted(){
    // this.admision();
    this.comunicados();
  },
    methods:{
      // async admision(){
      //   try{  
      //     const data = await fetch('http://gimnasioguatiquia.42web.io/wp-json/wp/v2/posts?search="Admision"');
      //     this.dato=await data.json();
      //     this.dato=await this.dato[0];
      //     this.datoimg= await this.dato._links["wp:featuredmedia"][0].href;
      //     await this.loadimage();
      //     console.warn("admision datosimagen",this.datoimg);
      //     console.warn("admision datos",this.dato);
      //   }catch(e){
      //     console.warn("Error",e)
      //   };
      // },
      // async loadimage(){
      //   try{  
      //     const data = await fetch(this.datoimg);
      //     this.datoepimg=await data.json();
      //     this.datoepimg=await this.datoepimg.guid.rendered;
      //     console.warn("admision imagenes",this.datoepimg);
      //   }catch(e){
      //     console.warn("Error",e)
      //   };
      // },



    async comunicados(){
        try{  
          const data = await fetch('http://gimnasioguatiquia.42web.io/wp-json/wp/v2/posts?search="comunicado"');
          this.datocom=await data.json();
          this.datocom=await this.datocom[0];
          this.datoimgcom= await this.datocom._links["wp:featuredmedia"][0].href;
          await this.loadimagecom();
          console.warn("comunicados datosimagen",this.datoimgcom);
          console.warn("comunicados datos",this.dato);
        }catch(e){
          console.warn("Error",e)
        };
      },
    
    async loadimagecom(){
        try{  
          const data = await fetch(this.datoimgcom);
          this.datoepimgcom=await data.json();
          this.datoepimgcom=await this.datoepimgcom.guid.rendered;
          console.warn("comunicados imagenes",this.datoepimgcom);
        }catch(e){
          console.warn("Error",e)
        };
    }
  },  
}
</script>

<style>

</style>
