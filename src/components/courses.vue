<template>

  <v-container>
    <v-row><v-spacer></v-spacer><h1>MATERIAS INSCRITAS</h1><v-spacer></v-spacer></v-row>
    <v-row><v-spacer><p id="invisiText">1</p> </v-spacer></v-row>
    <v-row v-for="course in courses" :key="course.id" ><v-col><v-card class="rounded-lg" >
      <v-card-title id="textoAzul" >{{course.courseName}}</v-card-title>
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
              <v-card-title id="textoAzul2" class="font-weight-bold">{{course.courseName}}</v-card-title>
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
                Horario: 7:00 - 9:00{{course.schedule}}
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

<script>
import { ref } from 'vue';
export default {
  name: "coursesList",
  data () {
    return {
      dialog: false,
    }
  },
  setup() {
    // make users variable reactive with the ref() function
    const courses = ref([
      { courseName: 'Título de la materia', professor: 'Cristiano Ronaldo', classroom: 'La Congeladora', days: 'Lunes, Miércoles & Viernes',schedule: '7:00 - 9:00' },
      { courseName: 'Título de la materia', professor: 'Cristiano Ronaldo', classroom: 'La Congeladora', days: 'Lunes, Miércoles & Viernes',schedule: '7:00 - 9:00' },
      { courseName: 'Título de la materia', professor: 'Cristiano Ronaldo', classroom: 'La Congeladora', days: 'Lunes, Miércoles & Viernes',schedule: '7:00 - 9:00' },
      { courseName: 'Título de la materia', professor: 'Cristiano Ronaldo', classroom: 'La Congeladora', days: 'Lunes, Miércoles & Viernes',schedule: '7:00 - 9:00' },
      { courseName: 'Título de la materia', professor: 'Cristiano Ronaldo', classroom: 'La Congeladora', days: 'Lunes, Miércoles & Viernes',schedule: '7:00 - 9:00' }
    ]);

    return {
      courses
    };
  }


}
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
a {
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
#invisiText{
  color:#FFFFFF;
}
</style>