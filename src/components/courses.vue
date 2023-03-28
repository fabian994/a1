<template>
  <h1>MATERIAS INSCRITAS</h1>
  <div >
  <v-card v-for="n in 4" :key="n" >
    <v-card-title class="textoAzul">Título de la materia</v-card-title>
    <v-card-subtitle>Profesor: Cristiano Ronaldo</v-card-subtitle>
    <v-card-actions>
      <v-btn color="#384FFE">Ver Detalles
        <v-dialog
            v-model="dialog"
            activator="parent"
            width="auto"
        >
          <v-card title="Título de la materia" class="textoAzul">
            <v-card-text class="textoGris">
              Profesor: Cristiano Ronaldo
              Salón:
            </v-card-text>

            <v-card-text class="textoGris">
              Salón: La Congeladora
            </v-card-text>

            <v-card-text class="textoGris">
              Días: Lunes, Miércoles & Viernes
            </v-card-text>

            <v-card-text class="textoGris">
              Horario: 7:00 - 9:00
            </v-card-text>
            <v-card-text class="invisiText">
              {{ n }}
            </v-card-text>
            <v-card-actions>
                <v-btn color="#384FFE" block @click="dialog = false">CERRAR</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-btn>
    </v-card-actions>
  </v-card>
  </div >
</template>

<script>
export default {
  name: "coursesList",
  data () {
    return {
      dialog: false,
    }
  },

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
.textoGris{
  color:#787C9D;
}
.textoAzul{
  color:#384FFE;
}
.invisiText{
  color:#FFFFFF;
}
</style>