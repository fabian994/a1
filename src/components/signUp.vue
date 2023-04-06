<template>
  <v-container>
    <v-row><v-spacer></v-spacer><h1>SIGNUP</h1><v-spacer></v-spacer></v-row>
    <v-row><v-text-field label="Correo Institucional" variant="outlined" v-model="email" type="email"></v-text-field></v-row>
    <v-row><v-text-field label="Contraseña" variant="outlined" v-model="password" type="password"></v-text-field></v-row>
    <v-row><v-spacer></v-spacer><p><button @click="register">Submit</button></p><v-spacer></v-spacer></v-row>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase/compat/app'

import { useRouter } from 'vue-router' // import router
const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const register = () => {
  firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
}
</script>
<script>
  export default {
    name: "signUp"
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