<template>
  <v-container>
    <v-row><v-spacer></v-spacer><h1>CREA UNA CUENTA</h1><v-spacer></v-spacer></v-row>
    <v-form @submit.prevent="register">
    <v-row><v-text-field label="Nombre Completo" variant="outlined" color="#384FFE" v-model="fName"></v-text-field></v-row>
    <v-row><v-text-field label="Matrícula" variant="outlined" v-model="uID" ></v-text-field></v-row>
      <v-row><v-text-field label="Carrera" variant="outlined" v-model="major" ></v-text-field></v-row>
      <v-row><p v-if="errMsg1">{{ errMsg1 }}</p></v-row>
    <v-row><v-text-field label="Correo Institucional" variant="outlined" color="#384FFE" v-model="Iemail" type="email"></v-text-field></v-row>
      <v-row><p v-if="errMsg2">{{ errMsg2 }}</p></v-row>
    <v-row><v-text-field label="Correo Personal" variant="outlined" color="#384FFE" v-model="Pemail" type="email"></v-text-field></v-row>
      <v-row><p v-if="errMsg3">{{ errMsg3 }}</p></v-row>
    <v-row><v-text-field label="Contraseña" variant="outlined" color="#384FFE" v-model="password1" type="password"></v-text-field></v-row>
      <v-row><p v-if="errMsg4">{{ errMsg4 }}</p></v-row>
    <v-row><v-text-field label="Confirmar Contraseña" variant="outlined" color="#384FFE" v-model="password2" type="password"></v-text-field></v-row>
      <v-row><v-spacer></v-spacer><v-checkbox color="#384FFE" label="Acepto términos y condiciones"></v-checkbox><v-spacer></v-spacer></v-row>
      <v-row><v-spacer></v-spacer><v-btn type="submit" color="#384FFE" class="d-flex justify-start align-center text-white"  text><span>Registrarse</span></v-btn><v-spacer></v-spacer></v-row>
    </v-form>

  </v-container>
</template>

<script setup>
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore'

import { ref } from 'vue'
import { useRouter } from 'vue-router' // import router

const errMsg1 = ref() // ERROR MESSAGE
const errMsg2 = ref() // ERROR MESSAGE
const errMsg3 = ref() // ERROR MESSAGE
const errMsg4 = ref() // ERROR MESSAGE
const errMsg5 = ref() // ERROR MESSAGE
const errMsg6 = ref() // ERROR MESSAGE
const errMsg7 = ref() // ERROR MESSAGE
const Iemail = ref('')
const password1 = ref('')

const fName = ref('')
const uID = ref('')
const major = ref('')
const Pemail = ref('')
const password2 = ref('')
const router = useRouter() // get a reference to our vue router

function notEmpty(data){
  return data.length !== 0;
}
function mailCheck(mail) {
  const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return reg.test(mail);
}

function passwordCheck(password){
  return password.length >= 6;
}

function passwordCoincidenceCheck(password1, password2){
  return password1 === password2;
}

const register = () => { // we also renamed this method
  if (notEmpty(fName.value)) {
    errMsg5.value = 'Correo no valido'
  }
  if (notEmpty(uID.value)) {
    errMsg6.value = 'Correo no valido'
  }
  if (notEmpty(major.value)) {
    errMsg7.value = 'Correo no valido'
  }
  if (!mailCheck(Iemail.value)){
    errMsg1.value = 'Correo no valido'
  }
  if (!mailCheck(Pemail.value)){
    errMsg2.value = 'Correo no valido'
  }
  if (!passwordCheck(password1.value)){
    errMsg3.value = 'La contraseña debe de ser mayor a 6 caracteres'
  }
  if (!passwordCheck(password2.value)){
    errMsg4.value = 'La contraseña debe de ser mayor a 6 caracteres'
  }
  if (passwordCoincidenceCheck){
    firebase
        .auth()
        .createUserWithEmailAndPassword(Iemail.value, password1.value) // THIS LINE CHANGED
        .then(() => {
          console.log('Successfully logged in!');
          firebase
              .firestore()
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({
                fullName: fName.value,
                sUID: uID.value,
                insMail: Iemail.value,
                perMail: Pemail.value,
                major: major.value

              })
          router.push('/home') // redirect to the feed
        })
        .catch(error => {
          console.log(error.code)
          alert(error.message);
        });
  } else {
    errMsg3.value = 'Las contraseñas deben de ser iguales'
    errMsg4.value = 'Las contraseñas deben de ser iguales'
  }


}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) .v-input__control .v-input__slot fieldset {
  color: #384FFE;}
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