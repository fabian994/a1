<template>

  <v-app>
    <v-app-bar color="#384FFE" app>
      <v-row>
        <v-col class="d-flex justify-start align-center">
          <v-img :src="logoPath"   ></v-img>
        </v-col>
        <v-spacer class="d-none d-md-block"></v-spacer>
        <v-spacer class="d-none d-md-block"></v-spacer>
        <v-spacer class="d-none d-md-block"></v-spacer>
        <v-spacer class="d-none d-md-block"></v-spacer>
        <v-col class="d-flex justify-end align-center "><v-btn ><router-link to="/" id="txtBlanco">INICIO</router-link></v-btn></v-col>
        <v-col class="d-flex justify-end align-center"><v-btn><router-link to="/courses" id="txtBlanco">LISTA DE MATERIAS</router-link></v-btn></v-col>
      </v-row>
    </v-app-bar>
    <RouterView/>
  </v-app>


</template>

<script>
export default {
  name: 'menuLogged',
  data () {
    return {
      logoPath: require('src/assets/logoTec.png')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  margin-top: 60px;
}
#txtBlanco{
  color: #FFFFFF;
}
.primario {
  color: #384FFE;
}
.secundario {
  color: #787C9D;
}
</style>