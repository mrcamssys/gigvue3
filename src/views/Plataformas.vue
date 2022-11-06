<template>
  <div class="ingreso">
    <div class="bodycap"></div>
    <h1>Bienvenido al sistema de Aulas Virtuales Plataforma Saberes</h1>
    <b-alert variant="warning" show
      >Recuerde que sus datos son personales e instranferibles</b-alert
    >

    <b-container class="bv-example-row">
      <b-row>
        <hr class="clearfix w-100 d-md-none" />
        <b-col
          ><h4>Informacion:</h4>
          <hr />
          <b-alert show variant="dark"
            >Es importante que cuente con acceso a la plataforma teams, para
            poder acceder a las clases virtuales, recuerde que no son las mismas
            contraseñas de la plataforma saberes</b-alert
          >
          <b-alert show variant="dark"
            >En caso de olvidar la contraseña del sistema saberes, es importante
            dirigirce al telefono: 7151827 en los horarios de atencion de 6:40Am
            a 2:00
          </b-alert>
        </b-col>
        <hr class="clearfix w-100 d-md-none" />
        <b-col
          ><h4>Sistema Saberes</h4>
          <hr />

          <form
            id="saberes"
            class=""
            method="post"
            action="https://app.sistemasaberes.com/seguridad/login"
          >
            <label for="feedback-user">Correo electronico</label>
            <input
              id="login"
              v-model="form.login"
              @keyup="verificarcampos"
              name="login"
              type="email"
              class="form-control"
            />
            <label for="text-password">Contraseña</label>
            <input
              id="psw"
              name="psw"
              v-model="form.psw"
              @keyup="verificarcampos"
              type="password"
              class="form-control"
              aria-describedby="password-help-block"
            />
            <hr />
            <b-alert
              show
              variant="danger"
              v-model="form.showDismissibleAlert"
              dismissible
              >Verifique que no existan campos vacios o esten los datos con sus
              respectivos correos completos</b-alert
            >
            <hr />
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="form.stdo"
              d-flex
            >
              Comenzar
            </button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "plataformas",
  data() {
    return {
      form: {
        login: "",
        psw: "",
        stdo: true,
        contar: "visible",
        showDismissibleAlert: false
      }
    };
  },
  methods: {
    verificarcampos() {
      var a, b;
      // alert(JSON.stringify(this.form)),
      (this.form.contar = this.form.psw.length + " " + this.form.login.length),
        +" ",
        (a = this.form.login.length <= 10 ? true : false),
        (b = this.form.psw.length <= 5 ? true : false),
        (this.form.stdo = a === b ? !true : !false);
      this.form.showDismissibleAlert = a === b ? !true : !false;
    }
  }
};
</script>

<style lang="css" scoped>
.bodycap{
  position:fixed;
  z-index: -100;
  width: 100%;
  height: 100%;
  background-image: url("../../public/fondos/background3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  left: 0px;
  top: 0px;
}
</style>

