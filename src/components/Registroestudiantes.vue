<template>
  <div class="registro">
    <b-alert variant="warning" show
      >Recuerde que os campos con: <b style="color:red;"> (*)</b>, son de
      caracter obligatorios</b-alert
    >

    <b-form @submit="onSubmit" @reset="onReset">
      <!-- v-if="show"> -->
      <b-container class="bv-example-row">
        <b-row>
          <hr class="clearfix w-100 d-md-none" />
          <b-col
            ><h4>Datos Personales</h4>
            <hr />

            Numero de identidad:
            <b-form-input
              id="identificacion"
              v-model="form.identidad"
              type="text"
              placeholder="Digite su numero de Identidad"
              required
            ></b-form-input>

            Nombres:
            <b-form-input
              id="Nombres"
              v-model="form.nombre"
              type="text"
              placeholder="Digite sus Nombres"
              required
            ></b-form-input>

            Apellidos:
            <b-form-input
              id="Apellidos"
              v-model="form.apellido"
              type="text"
              placeholder="Digite sus Apellidos"
              required
            ></b-form-input>

            <b-form-group
              id="input-group-3"
              label="Seleccione tipo de documento:"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Sexo de nacimiento"
              label-for="input-4"
            >
              <b-form-select
                id="input-4"
                v-model="form.sexo"
                :options="sexo"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
          <hr class="clearfix w-100 d-md-none" />
          <b-col
            ><h4>Informacion de contacto</h4>
            <hr />
            Correo electronico
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Digite su correo"
              required
            ></b-form-input>

            Telefono de Contacto:
            <b-form-input
              id="Apellidos"
              v-model="form.fijo"
              type="text"
              placeholder="Digite su telefono fijo"
              required
            ></b-form-input>

            Numero Celular:
            <b-form-input
              id="Apellidos"
              v-model="form.celular"
              type="text"
              placeholder="Digite su celular"
              required
            ></b-form-input>

            <h4>Observaciones Generales</h4>
            <hr />
            <b-alert variant="dark" show>
              En este espacio Ingrese datos del estudiante asi como informacion
              que considere relevante antes de ser llamado a entrevista
            </b-alert>
            <b-form-textarea
              id="textarea-auto-height"
              placeholder="Espacio de recomendaciones o elementos a considerar antes de la citacion"
              rows="3"
              max-rows="8"
              v-model="form.observa"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </b-container>
      <hr />
      <b-button type="Enviar" variant="primary">Registrar Consulta</b-button>
      <b-button type="reset" variant="danger">Limpiar Formulario</b-button>
    </b-form>

    <!-- <b-card class="mt-3" header="verificador de datos de respuesta">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        identidad: "",
        nombre: "",
        apellido: "",
        food: null,
        sexo: null,
        email: "",
        fijo: "",
        celular: "",
        observa: ""
      },
      foods: [
        { text: "Seleccione el tipo de documento", value: null },
        "C.C. Cédula de ciudadanía",
        "C.E. Cédula de extranjería",
        "N.E.S Número establecido por la SED",
        "N.I.P. Número Identificación Personal",
        "N.U.I.P. Número Único de Identificación Personal",
        "P. Pasaporte",
        "P.E.P Permiso Especial de Permanencia",
        "R.C. Registro civil",
        "T.I. Tarjeta de Identidad"
      ],
      sexo: [
        { text: "Seleccione respuesta", value: null },
        "Masculino",
        "Femenino"
      ],
      show: true
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      //alert(JSON.stringify(this.form))
      try {
        const estadoespera = await fetch(
          "https://gigproyect-52b38-default-rtdb.firebaseio.com/registros.json",
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.form)
          }
        );
        const database = await estadoespera.JSON;
        console.log(database);
      } catch (error) {
        alert("no se ha podido enviar el formulario");
        console.log(error);
        return;
      }
      alert(
        "Estimado usuario sus datos fueron registrados con exito espere pronto nuestra respuesta, muchas gracias por elegirnos como su institucion educativa"
      );
      this.onReset(event);
    },
    onReset(event) {
      event.preventDefault();

      (this.form.identidad = ""),
        (this.form.nombre = ""),
        (this.form.apellido = ""),
        (this.form.food = null),
        (this.form.sexo = null),
        (this.form.email = ""),
        (this.form.fijo = ""),
        (this.form.celular = ""),
        (this.form.observa = "");

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style></style>
