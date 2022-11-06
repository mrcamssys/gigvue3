<template>
<diV class="p-4">
    <h1 class="titulo">Misión y Visión Institucuonal</h1>

    <div class="card text-dark bg-light mb-3">
        <div class="card-header">Objeto social</div>
        <div class="card-body">
            <p class="card-text">Calidad académico y convivencia; donde se satisfagan las necesidades y expectativas de los clientes (maestros, padres y estudiantes)  </p>
            <hr />
            <h5 class="card-title">Responsabilidad Social</h5>
            <p class="card-text">Hacer parte de  la comunidad educativa Guatiquia, implica disfrutar y poner en práctica los derechos y deberes que buscan el fortalecimiento de la autoestima y la  autorregulación, basados en el respeto, la autonomía, la sana convivencia y el bienestar individual y colectivo; para que nuestro niños, niñas y jóvenes reflejen desde la cotidianidad su identidad con la institución educativa, en donde el eje central es el ser humano integral como agente de cambio y transformador de su entorno.</p>
        </div>
    </div>

    <div class="row row-cols-1 row-cols-md-2 g-4">

        <div class="col">
            <div class="card">
            <img :src="baseUrl()+'fondos/vision.jpg'"  class="img-thumbnail card-img-top p-4" >
            <div class="card-body">
                <div class="card-header">
                    <h5 class="card-title">Visión</h5>
                </div>
                <hr>
                <p class="card-text">El Gimnasio Integral Guatiquia se proyecta en los próximos 5 años consolidándose como una institución educativa de alta calidad académica y convivencial para que nuestros egresados sean seres humanos autónomos y competentes en su contexto.</p>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
            <img :src="baseUrl()+'fondos/mision.jpg'"  class="img-thumbnail card-img-top p-4" >
            <div class="card-body">
                
                <div class="card-header">
                    <h5 class="card-title">Misión</h5>
                </div>
                <hr>
                <p class="card-text">FILOSOFIA INSTITUCIONAL El Gimnasio Integral Guatiquia impulsa una educación liberadora que genera en los educandos procesos de transformación personal y social. Ofrece las condiciones necesarias para que adquiera valores éticos, morales y culturales que les permita formar una conciencia crítica frente al proceso social colombiano y los capacite para expresar acciones concretas, actitudes solidarias y de servicio. Toma al educando como persona y centro de su acción educativa desde su realidad. Por tanto concede importancia prioritaria al estado de desarrollo en que se encuentra, que le permita un aprendizaje natural a través de sus experiencias vivenciales, actitudes creadores y la satisfacción de sus inquietudes y necesidades. Busca formar un
    ser humano con criterio, con personalidad y donde la racionalidad sea el argumento fundamental para alcanzar la autonomía y a la libertad.</p>
            </div>
            </div>
        </div>
        
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