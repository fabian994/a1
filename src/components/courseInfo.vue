<template>
  <v-card class="rounded-lg mb-6" >
    <v-card-title id="textoAzul" >{{ props.courseTitle }}</v-card-title>
    <v-card-subtitle id="textoGris">Profesor: {{props.professor}}</v-card-subtitle>
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
              <v-card-title id="textoAzul2" class="font-weight-bold">{{courseTitle}}</v-card-title>
<!--              <v-card-text id="textoGris">
                id: {{id}}
              </v-card-text>-->
              <v-card-text id="textoGris">
                Profesor: {{professor}}
              </v-card-text>

              <v-card-text id="textoGris">
                Salón: {{classroom}}
              </v-card-text>

              <v-card-text id="textoGris">
                Días: {{days}}
              </v-card-text>

              <v-card-text id="textoGris">
                Horario: {{schedule}}
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn class="justify-end text-caption font-weight-bold text-h5" text-align="end" color="#384FFE" block @click="dialog = false">Cerrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, defineProps } from 'vue'

/*const course = ref({
  id:'',
  courseTitle:'',
  professor:'',
  classroom:'',
  days:'',
  schedule:''
})*/
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  courseTitle: {
    type: String,
    required: true
  },
  professor: {
    type: String,
    required: true
  },
  classroom: {
    type: String
  },
  days: {
    type: String
  },
  schedule: {
    type: String
  }
})
//console.log(props)
let dialog = ref(false)
</script>


<style>
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