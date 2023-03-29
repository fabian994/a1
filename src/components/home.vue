<template>
  <v-container>
    <v-row><v-spacer></v-spacer><h1>INFORMACIÓN DEL ALUMNO</h1><v-spacer></v-spacer></v-row>

    <v-row><v-spacer></v-spacer><v-avatar :image="studentImg" size="250"></v-avatar><v-spacer></v-spacer></v-row>
    <div class="d-none d-md-block">
      <v-row >
        <v-spacer></v-spacer>
        <v-col align-self="start"><h3>Nombre Completo</h3></v-col>
        <v-col align-self="start"><h3>Matrícula</h3></v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col align-self="center"><p>Juan Escutia</p></v-col>
        <v-col align-self="center"><p>A01361234</p></v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col><h3>Correo Institucional</h3></v-col>
        <v-col><h3>Carrera</h3></v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col><p>A01361234@tec.mx</p></v-col>
        <v-col><p>ISC</p></v-col>
        <v-spacer></v-spacer>
      </v-row>

      <v-row >
        <v-spacer></v-spacer>
        <v-col><h3>Correo Personal</h3></v-col>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-row>
      <v-row >
        <v-spacer></v-spacer>
        <v-col><p>murioporlapatria@gmail.com</p></v-col>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <div class="d-md-none">
      <h3>Nombre Completo</h3>
      <p>Juan Escutia</p>
      <h3>Matrícula</h3>
      <p>A01361234</p>
      <h3>Correo Institucional</h3>
      <p>A01361234@tec.mx</p>
      <h3>Carrera</h3>
      <p>ISC</p>
      <h3>Correo Personal</h3>
      <p>murioporlapatria@gmail.com</p>
    </div>
  </v-container>
</template>

<script>
import image from "@/assets/juan-escutia2.jpeg"
export default {

  name: 'homePage',
  data: function () {
    return {
      studentImg: image
    }
  },
  // './src/assets/juan-escutia2.jpeg')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color:#384FFE;
  font-weight: bold;
}
h1 {
  margin: 10px 0 0;
  color:#384FFE;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  color: #787C9D;
  font-weight: bold;
}
</style>
