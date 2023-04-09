<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-row><v-spacer></v-spacer><h1>LOGIN</h1><v-spacer></v-spacer></v-row>
      <v-row><v-text-field label="Correo Institucional" variant="outlined" v-model="Iemail" type="email"></v-text-field></v-row>
      <v-row><v-text-field label="Contraseña" variant="outlined" v-model="password" type="password"></v-text-field></v-row>
      <v-row><p v-if="errMsg">{{ errMsg }}</p></v-row>
      <v-row><v-spacer></v-spacer><p><v-btn type="submit">Iniciar Sesión</v-btn></p><v-spacer></v-spacer></v-row>
    </v-form>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'

import firebase from "firebase/compat/app";
import "firebase/compat/auth"

import { useRouter } from 'vue-router' // import router
const Iemail = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router

const login = () => { // we also renamed this method
  firebase
      .auth()
      .signInWithEmailAndPassword(Iemail.value, password.value) // THIS LINE CHANGED
      .then(() => {
        console.log('Successfully logged in!');
        router.push('/home') // redirect to the feed
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break
          default:
            errMsg.value = 'Email or password was incorrect'
            break
        }
      });
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