<template>
  <v-container>
    <v-row><v-spacer></v-spacer><h1>LOGIN</h1><v-spacer></v-spacer></v-row>
    <v-row><v-text-field label="Correo Institucional" variant="outlined" v-model="Iemail" type="email"></v-text-field></v-row>
    <v-row><v-text-field label="Contraseña" variant="outlined" v-model="password1" type="password"></v-text-field></v-row>
    <v-row><v-spacer></v-spacer><p><button @click="register">Submit</button></p><v-spacer></v-spacer></v-row>


  </v-container>
</template>

<script>
export default {
  name: "logIn"
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