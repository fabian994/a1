<template>

  <div class="hello">
    <h1>INFORMACIÓN DEL ALUMNO</h1>
    <img :src="studentImg"/>

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
}
h1 {
  margin: 40px 0 0;
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
a {
  color: #42b983;
}
</style>
