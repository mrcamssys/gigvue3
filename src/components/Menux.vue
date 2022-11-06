<template>
  <div>
    <b-navbar class="menucabeza" toggleable="lg" variant="light">
      <b-navbar-brand  href="#" to="/">
        <div class="logo"></div>
        <div class="dlogo">
        <img :src="baseUrl()+'logos/logo.png'" class="logo" /> 
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="(item, id) in menuprincipal.menom"
            :key="id"
            font-scale="6"
            :to="menuprincipal.menruta[id]"
          >
            {{ item }}
          </b-nav-item>
          
          
          <!-- <b-nav-item font-scale="6" href="/blockinstitucional">Block Institucional</b-nav-item> -->
          
          <!-- <b-nav-item font-scale="6" href="http://gimnasioguatiquia.42web.io/wp-admin/" target="__blank">Herramientas</b-nav-item> -->
          <b-nav-item font-scale="6" href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=0&client-request-id=64be7ed2-0ce8-4fbc-a100-b7f0e3a939df&protectedtoken=true&domain_hint=gimnasioguatiquia.edu.co&nonce=637082168660821517.b621fb21-6bc1-48ec-a4fd-aa2e0d94e45b&state=FYvJDYAgEABBW7ANjkVYsJwFlsSEyMMY2xcfM_MaKYRYJ8tE2ikRcY82OcCE-DdA1BkdtOxAYS6gfOKiyLeqiBzbenj2Icv5bma8ZJ7rvKl31lwfXcYH&sso_reload=true" target="__blank">Correo Institucional</b-nav-item>
           
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-btn
            @click="
              nuevaruta('https://www.facebook.com/gimnasioguatiquia.edu.co')
            "
            class="f1"><b-icon icon="facebook" font-scale="1"></b-icon></b-btn>

          <b-btn
            @click="
              nuevaruta(
                'https://www.youtube.com/channel/UCA-uViVcw5eRX70yLo1EgUw'
              )
            "
            class="y1"><b-icon icon="youtube" font-scale="1"></b-icon></b-btn> -->
          
          <b-btn to="/plataformas" class="btn-presentacion"
            ><span class="icon-books" aria-hidden="true"></span> Saberes</b-btn>
            
          
          <b-btn @click="
              nuevaruta(
                'https://educaevoluciona.com/ingreso.html'
              )
            " class="y2"><span class="icon-calculator" aria-hidden="true"></span> Educar Norma</b-btn>

            <b-btn @click="
              nuevaruta(
                'https://api.whatsapp.com/send?phone=573192098659&app=facebook&entry_point=page_cta&fbclid=IwAR3_JrkhZ3_PrRMcdBkXuKZ4cWh1PKDE2LEnfVQj82pzyS0C6oRpdlU0rIU'
              )
            " class="btn-presentacion"><span class="icon-whatsapp" aria-hidden="true"></span> Whatsapp</b-btn>

            <b-btn @click="
              nuevaruta(
                'https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/banco-avvillas/resultado-busqueda/realizar-pago?idConv=00016382&origen=buscar'
              )
            " class="btn-pagovirtual"><b-icon icon="credit-card" font-scale="1"></b-icon> Pago Virual</b-btn>
            
            <!-- <b-btn to="/pagovirtual" class="btn-pagovirtual"
            ><b-icon icon="credit-card" font-scale="1"></b-icon> Pago Virual</b-btn> -->


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Menux",
  data() {
    return {
      // se debe colocar registros en base de datos
      menuprincipal: {
        menom: [
          "El Colegio",
          "Areas del Saber",
        ],
        menruta: [
          "/colegio", 
          "/areas", 
          "/escolares", 
          "/sedes", 
          "/nadmisiones",
          "/contactos"
          ]
      }
    };
  },
  methods: {
    baseUrl() {
			return process.env.BASE_URL;
		},

    nuevaruta(ruta) {
      window.open(ruta, "_blank");
    }
  }
};
</script>

<style>
.navbar-light .navbar-nav .nav-link:hover {
  color: rgba(15, 78, 12, 0.7);
}

.navbar {
  box-shadow: 0px 0px 10px rgb(184, 182, 182);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.7);
}
.btn-presentacion {
  background-color: rgba(15, 78, 12, 0.7);
  margin: 2px;
}
.btn-presentacion:hover {
  background-color: rgba(60, 114, 175, 0.7);
  margin: 0px;
  border: 5px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}

.btn-pagovirtual {
  background-color: rgba(61, 9, 109, 0.7);
  margin: 3px;
}
.btn-pagovirtual:hover {
  background-color: rgba(60, 114, 175, 0.7);
  margin: 0px;
  border: 6px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}

.f1 {
  background-color: rgba(17, 39, 233, 0.7);
  color: blanchedalmond;
  margin: 2px;
}
.f1:hover {
  background-color: rgba(17, 39, 233, 0.7);
  color: blanchedalmond;
  margin: 0px;
  border: 5px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}
.y1 {
  background-color: rgba(231, 18, 18, 0.7);
  color: blanchedalmond;
  margin: 2px;
}
.y1:hover {
  background-color: rgba(231, 18, 18, 0.7);
  color: blanchedalmond;
  margin: 0px;
  border: 5px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}

.y2{
  background-color: rgba(18, 103, 231, 0.7);
  color: blanchedalmond;
  margin: 2px;
}
.y2:hover {
  background-color: rgba(27, 7, 116, 0.7);
  color: blanchedalmond;
  margin: 0px;
  border: 5px solid #eee;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
}
.menucabeza{
  opacity: 0.9;
}
.dlogo{
  position:absolute;
  left: 10px;
  top: 0px;
  background-color: rgb(213, 210, 210);
}


@media (max-width: 990px), handheld and (orientation: landscape){  
  .dlogo{
    position:unset;
    left: 0px;
    top:  0px;
    background-color:transparent; 
    padding: 0px;
    margin: 0px;
  }
  .logo {
    width: 30% !important;
    padding: 0px !important;
  }
}
</style>
