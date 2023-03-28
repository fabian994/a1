<template>

  <v-container>
    <v-row><v-spacer></v-spacer><h1>MATERIAS INSCRITAS</h1><v-spacer></v-spacer></v-row>
    <v-row><v-spacer><p class="invisiText">1</p> </v-spacer></v-row>
    <v-card v-for="n in 4" :key="n" width="75%" align-self="end">
      <v-card-title class="textoAzul" >Título de la materia</v-card-title>
      <v-card-subtitle class="textoGris">Profesor: Cristiano Ronaldo</v-card-subtitle>
      <v-card-actions>
        <div><v-btn class="d-flex flex-row-reverse bg-sur"><p id="masDetalles">Ver Detalles</p>

          <v-dialog
              v-model="dialog"
              activator="parent"
              width="50%"
          >
            <v-card title="Título de la materia" class="textoAzul2">
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
                  <v-btn text-align="end" color="#384FFE" block @click="dialog = false">CERRAR</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
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
  text-align: start;
}
.textoAzul{
  color:#384FFE;
  text-align: start;
}
.textoAzul2{
  color:#384FFE;
  text-align: center;
}
#masDetalles{
  color:#384FFE;
}
.invisiText{
  color:#FFFFFF;
}
</style>