<template>

  <v-container>
    <v-row><v-spacer></v-spacer><h1>MATERIAS INSCRITAS</h1><v-spacer></v-spacer></v-row>
<!--    <v-row><p v-for="course in courseList" :key="course.id"> {{ course.id }} {{ course.classroom }} </p></v-row>-->
    <v-row v-for="course in courseList" :key="course.id"><v-col>
      <v-card class="rounded-lg" >
       <v-card-title id="textoAzul" >{{ course.courseTitle }}</v-card-title>
       <v-card-subtitle id="textoGris">Profesor: {{course.professor}}</v-card-subtitle>
       <v-card-actions class="justify-end text-h5">
         <div class="text-xs-center">
         <v-btn class="text-caption font-weight-bold text-h3"> <p id="masDetalles">Ver Detalles</p>

           <v-dialog
               v-model="dialog"
               activator="parent"
               max-width="60%"
               class="pa-2 ma-2"

           >
             <v-card class="rounded-lg">
               <v-card-title id="textoAzul2" class="font-weight-bold">{{course.courseTitle}}</v-card-title>
<!--               <v-card-text id="textoGris">
                 Salón: {{course.id}}
               </v-card-text>-->
               <v-card-text id="textoGris">
                 Profesor: {{course.professor}}
               </v-card-text>

               <v-card-text id="textoGris">
                 Salón: {{course.classroom}}
               </v-card-text>

               <v-card-text id="textoGris">
                 Días: {{course.days}}
               </v-card-text>

               <v-card-text id="textoGris">
                 Horario: {{course.schedule}}
               </v-card-text>
               <v-card-actions class="justify-end">
                   <v-btn class="justify-end text-caption font-weight-bold text-h5" text-align="end" color="#384FFE" block @click="dialog = false">Cerrar</v-btn>
               </v-card-actions>
             </v-card>
           </v-dialog>
         </v-btn></div>
       </v-card-actions>
     </v-card></v-col>
     </v-row>
  </v-container>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { ref, onBeforeMount, onMounted} from 'vue'
  import firebase from "firebase/compat/app"
  import { getFirestore, getDocs, collection, query } from 'firebase/firestore'

  const router = useRouter()
  const courseList = ref([])
  let dialog = ref(false)

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
    const courseData = []
    const db = getFirestore()
    const colRef = query(collection(db, 'courseList'))
    const docsSnap = await getDocs(colRef)
    //const courseInfo = { id:"", courseTitle:"", professor:"", classroom:"", days:"", schedule:""}
    docsSnap.forEach(doc => {
      const courseInfo = {
        id: doc.id,
        courseTitle: doc.data().courseTitle,
        professor: doc.data().professor,
        classroom:doc.data().classroom,
        days: doc.data().days,
        schedule: doc.data().schedule}
      courseData.push(courseInfo)
      //console.log(doc.data().classroom)
    })
    console.log(courseData)
    courseList.value = courseData
    //console.log(courseInfo[0])

  })
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
p {
  color: #42b983;
}
#textoGris{
  color:#787C9D;
  text-align: start;
  font-weight: bold;
}
#textoAzul{
  color:#384FFE;
  text-align: start;
  font-weight: bold;
}
#textoAzul2{
  color:#384FFE;
  text-align: center;
  font-weight: bold;
}
#masDetalles{
  color:#384FFE;
  font-weight: bold;
}
</style>