<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Manual instructivo" active>
          <b-card-text>
            <p>
              Recuerde que si usted ya tiene usuario registrado puede iniciar en
              el paso 3. Puede descargar el
              <a
                href="https://s3.amazonaws.com/sistema-saberes-static/manual/preinscripcion_de_acudientes_o_padres_de_familia.pdf"
              >
                manual de usuario</a
              >
              o comuníquese con la institución si tiene inquietudes Tel: 7151827
            </p>
            <p>
              Diligencie sus datos personales, (recuerde, son los del acudiente
              o padre de familia, los datos de los estudiantes serán
              diligenciados mas adelante).
            </p>
            <p>
              Revise su correo electrónico allí recibirá en pocos minutos su
              contraseña.
            </p>
            <p>
              Ingrese a sistemasaberes.com e inicie sesión con el nombre de
              usuario (correo electrónico) y contraseña.
            </p>
          </b-card-text>
        </b-tab>

        <b-tab title="Comenzar Registro">
          <b-card-text>
            <registroestudiantes />
          </b-card-text>
        </b-tab>

        <b-tab title="Verificar Registro">
          <b-card-text> </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Registroestudiantes from "./Registroestudiantes.vue";
export default {
  components: {
    Registroestudiantes
  }
};
</script>

<style></style>
