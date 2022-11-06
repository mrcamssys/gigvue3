<template>
<diV class="p-4">
    <!-- <h1 class="titulo">Valores institucionales</h1> -->
     <!--{{$route.params.id}}-->
    <img :src="baseUrl()+'fondos/Imagen1.png'"  class="img-fluid" width="100%" >



      <div class="row">
        <div class="col p-4">
          <h2>Proyección</h2><hr>
          <h4>Durante muchos años de práctica pedagógica y el deseo de participar e la formación de niños y jóvenes de Ciudad Bolívar generó en la maestra Rubiela Ángel el interés por crear una institución educativa para niños en edad preescolar.</h4>
        </div>
      </div>

      
      <div class="row">
        <div class="col p-4">
          <h4>Motivada por este sueño empieza a construir su proyecto que desde las aulas de práctica pedagógica y experiencia como docente en la localidad 19 facilitó la realización del mismo.</h4>
        </div>
        <div class="col p-4">
          <h4>En octubre del año 1992 y como vecina de este sector fue invitada por la comunidad de la urbanización Guatiquía para organizar y animar la fiesta que programó la junta de acción comunal del barrio con el fin de celebrar el día de los niños.</h4>
        </div>
      </div>


      <div class="row">
        <div class="col p-4">
          <h4>Fue la oportunidad que se le presentó para hacer contacto con la comunidad y darse a conocer como educadora, momento desde el cual se empieza a hacer realidad el sueño que durante muchos años guardaba en su corazón.</h4>

        </div>
        <div class="col p-4">
          <img src="https://res.cloudinary.com/civico/image/upload/c_fit,f_auto,fl_lossy,h_1200,q_auto:low,w_1200/v1463589624/entity/image/file/1eb/000/573c9af634e8c56ef30001eb.jpg"  class="rounded mx-auto d-block" width="100%" >
        </div>
        <div class="col p-4">
          <h4>A partir de entonces se da inicio a la materialización de aquel proyecto, se empieza a tocar puertas y buscar los medios necesarios para cumplir con su objetivo: ofrecer una institución educativa para los niveles de preescolar con un alto nivel de formación y la construcción de un proyecto de vida sobre la base de la recuperación de los valores.</h4>
        </div>
      </div>

      <div class="row">
        <div class="col p-4">
          <h4>El primer paso fue buscar los espacios que le permitirían abrir las puertas a los estudiantes para lo cual solicito en arriendo a su hermano William tres aulas que le permitieran ofrecer los niveles de Pre jardín, jardín y transición.</h4>
        </div>
        <div class="col p-4">
          <h4>Siguiendo el proceso de creación presenta en el año 1992 ante la secretaria de educación la petición de apertura del plantel educativo para los niveles A y B de preescolar y solicita a la vez la licencia para iniciar labores.</h4>
        </div>
      </div>
      
      <div class="row">
        <div class="col p-4">
        <h4>Con una fe inmensa en su proyecto se dedica a realizar volantes, pancartas y afiches que distribuyó en el sector con el fin de presentar y dar a conocer a los vecinos su sueño.</h4>
        </div>
      </div>

</diV>
</template>

<script>
export default {
 name: "historia",
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