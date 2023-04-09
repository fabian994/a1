<template>
  <v-container>
    <v-row><v-spacer></v-spacer><h1>INFORMACIÓN DEL ALUMNO</h1><v-spacer></v-spacer></v-row>

    <v-row><v-spacer></v-spacer><v-avatar :image="uimage" size="250"></v-avatar><v-spacer></v-spacer></v-row>
    <div class="d-none d-md-block">
      <v-row >
        <v-spacer></v-spacer>
        <v-col align-self="start"><h3>Nombre Completo</h3></v-col>
        <v-col align-self="start"><h3>Matrícula</h3></v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col align-self="center"><p>{{data.fullName}}</p></v-col>
        <v-col align-self="center"><p>{{ data.sUID }}</p></v-col>
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
        <v-col><p>{{data.insMail}}</p></v-col>
        <v-col><p>{{data.major}}</p></v-col>
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
        <v-col><p>{{data.perMail}}</p></v-col>
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

<script setup>
  //import image from "@/assets/juan-escutia2.jpeg"
  import { useRouter } from 'vue-router'
  import {ref, onBeforeMount, onMounted} from 'vue'
  import firebase from "firebase/compat/app"
  import { getAuth } from 'firebase/auth'
  import { getFirestore, getDoc, doc } from 'firebase/firestore'


  //const uRef = db.collection('users')
  const uimage = new URL('@/assets/juan-escutia2.jpeg', import.meta.url).href
  const router = useRouter()

  const data = ref({
    fName:'',
    sUID:'',
    insMail:'',
    perMail:'',
    major:''
  })

  const authListener = firebase.auth().onAuthStateChanged(function(user) {
    if (!user) { // not logged in
      alert('you must be logged in to view this. redirecting to the home page')
      router.push('/')
    }
    else {
      console.log('func')
    }
  })
  onBeforeMount(() => {
    // clear up listener
    authListener()
  })
  onMounted(async () => {
    const auth = getAuth()
    const user = auth.currentUser
    const db = getFirestore()
    const docRef = doc(db, 'users', user.uid)
    const docSnap = await getDoc(docRef)
    //const storage = getStorage()
    //userImage.value = await getDownloadURL(storageRef(storage, 'user.jpg'))
    data.value = docSnap.data()
  })

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
