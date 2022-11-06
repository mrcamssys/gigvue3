<template>
<diV class="p-4">
    <h1 class="titulo">Valores institucionales</h1> <!--{{$route.params.id}}-->

 
    <div class="row row-cols-1 row-cols-md-3 g-4">

        <div class="col">
            <div class="card">
            <img :src="baseUrl()+'fondos/honestidad.jpg'"  class="img-thumbnail card-img-top p-4" >
            <div class="card-body">
                <div class="card-header">
                    <h5 class="card-title">HONESTIDAD</h5>
                </div>
                <hr>
                <p class="card-text">En la comunidad educativa se actúa se relaciona desde acciones transparentes, leales y equitativas luchando por ideales nobles y obrando con actitudes definidas y coherentes con nuestro proyecto de vida. </p>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
            <img :src="baseUrl()+'fondos/solidaridad.jpg'"  class="img-thumbnail card-img-top p-4" >
            <div class="card-body">
                
                <div class="card-header">
                    <h5 class="card-title">SOLIDARIDAD</h5>
                </div>
                <hr>
                <p class="card-text">Ayudando y apoyando a los demás cuando lo necesiten, sin esperar nada a cambio, colaborando mutuamente para conseguir un fin común. Trabajando en equipo; damos lo mejor de nosotros mismos. Valorando el aporte de las personas para el alcance de los objetivos comunes.</p>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
            <img :src="baseUrl()+'fondos/responsabilidad.jpg'"  class="img-thumbnail card-img-top p-4" >
            <div class="card-body">
                
                <div class="card-header">
                    <h5 class="card-title">RESPONSABILIDAD</h5>
                </div>
                <hr>
                <p class="card-text">Dando cuenta de los actos y asumiendo las consecuencias de los mismos, cumpliendo las tareas con diligencia, seriedad y prudencia, porque sabemos que las cosas deben hacerse bien desde el principio hasta el final. </p>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
            <img :src="baseUrl()+'fondos/respeto.jpg'"  class="img-thumbnail card-img-top p-4" >
            <div class="card-body">
                
                <div class="card-header">
                    <h5 class="card-title">RESPETO</h5>
                </div>
                <hr>
                <p class="card-text">Base fundamental para una convivencia sana y pacífica entre los miembros de la familia Guatiquia, entendida como la capacidad de ponernos en el papel del otro y asumir con empatía los pensamientos y acciones de los demás. </p>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
            <img :src="baseUrl()+'fondos/equidad.jpg'"  class="img-thumbnail card-img-top p-4" >
            <div class="card-body">
                
                <div class="card-header">
                    <h5 class="card-title">EQUIDAD</h5>
                </div>
                <hr>
                <p class="card-text">Buscando que todos tengan las mismas oportunidades para alcanzar un mundo más humano y justo. Decimos no a LA DISCRIMINACIÓN y en lugar de murallas que separen construimos puentes de unión y hermandad.  </p>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card">
            <img :src="baseUrl()+'fondos/perseverancia.jpg'"  class="img-thumbnail card-img-top p-4" >
            <div class="card-body">
                
                <div class="card-header">
                    <h5 class="card-title">PERSEVERANCIA</h5>
                </div>
                <hr>
                <p class="card-text">Es el sentido de compromiso que impide abandonar las tareas emprendidas y nos animan a trabajar hasta el final.</p>
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