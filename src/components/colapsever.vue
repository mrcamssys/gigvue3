<template>
  <!-- <div class="accordion" role="tablist">
    <b-overlay :show="show" rounded="sm">
      <template>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab" end>
            <b-button block v-b-toggle.accordion-1 variant="info">
              <b-icon icon="inbox-fill"></b-icon> Información
              Institucional</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          > -->
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#FFFFFF"
              style="text-shadow: 1px 1px 2px #333"
            >
              <template
                img-blank
                v-for="(datax, id) in informacion"
                v-bind="id"
              >
                <b-carousel-slide :img-src="datax.urlimg" :key="id">
                  <!-- <div v-html="datax.html"></div> -->
                  <!-- <b-img :src="datax.urlimg" fluid alt="Fluid image"></b-img> -->
                  <!-- <b-button :href="'/blockinstitucional/'+datax.separador" size="sm" block variant="success" v-html="">  </b-button> -->

                  <router-link
                    tag="a"
                    :to="'/blockinstitucional/' + datax.separador"
                    class="btn btn-success lg"
                    title="nuevo Plan de Acción"
                  >
                    <i class=""></i>
                    <div v-html="datax.html"></div
                  ></router-link>
                </b-carousel-slide>
              </template>
            </b-carousel>
          <!-- </b-collapse>
        </b-card>
      </template>
    </b-overlay>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      show: true,
      informacion: [
        {
          titulo: "Informacion",
          html: "<h2>Sin informacion</h2>",
          urlimg: "fondos/plataformas.jpeg",
          urldata: "",
        },
      ],
      dato: {},
      datoimg: {},
      datoepimg: {},
      imagen: {},

      datocom: {},
      datoimgcom: {},
      datoepimgcom: {},
      imagencom: {},
      text: `Error en la lectura temporal de datos consultar con el administrador.`,
    };
  },
  mounted() {
    // this.admision();
    this.comunicados();
  },
  methods: {
    async comunicados() {
      //datocom.excerpt.rendered //texto html
      //datoepimgcom ruta imagen
      //ruta de entradas datocom.guid.rendered

      let datosEP,
        objeto,
        i,
        arreglo = [],
        datoespecifico,
        urlimgdata = "",
        cant = 0;
      try {
        const data = await fetch(
          "http://gimnasioguatiquia.42web.io/wp-json/wp/v2/posts?order=desc"
        );
        datosEP = await data.json();
        console.warn("admision datos", datosEP);
        if (datosEP.length < 4) {
          cant = datosEP.length;
        } else {
          cant = 4;
        }

        for (i = 0; i < cant; i++) {
          datoespecifico = await datosEP[i];
          urlimgdata = await datoespecifico._links["wp:featuredmedia"][0].href;
          let urldata = await datoespecifico.guid.rendered.split("?"),
            objeto = {
              html: await datoespecifico.excerpt.rendered,

              separador: urldata[1],
              titulo: "Informacion",
              urlimg: await this.loadimage(urlimgdata),
            };
          console.warn("datoespecifico: " + i + " ", datoespecifico);
          console.warn("objeto: " + i + " ", objeto);
          await arreglo.push(objeto);
          // this.datoimgcom = await this.dato._links["wp:featuredmedia"][1].href;
        }
        this.informacion = await arreglo;
        // await this.loadimage();

        // console.warn("admision datosimagen",this.informacion);
        console.warn("cantidad datos", datosEP.length);
        console.warn("admision datos", datosEP);
        this.show=false;
      } catch (e) {
        console.warn("Error", e);
      }
    },

    async loadimage(datoimg) {
      let rutaimagen = "",
        datoepimg;
      try {
        const data = await fetch(datoimg);
        datoepimg = await data.json();
        rutaimagen = await datoepimg.guid.rendered;
        console.warn("admision imagenes", this.datoepimg);
      } catch (e) {
        console.warn("Error", e);
      }
      return rutaimagen;
    },

    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    },
  },
};
</script>

<style>
.accordion {
  position: none !important;
  height: 100% !important;
}
</style>
