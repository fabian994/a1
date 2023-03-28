<template>

  <v-app>
    <v-app-bar color="#384FFE" app>
      <div class="d-flex">
        <v-img :src="logoPath" height="75px" contain width="100px" position="top left"></v-img>
      </div>
      <v-btn class="ma-2 hidden-sm-and-down" ><router-link to="/" id="txtBlanco">INICIO</router-link></v-btn>
      <v-btn class="ma-2 hidden-sm-and-down" ><router-link to="/courses" id="txtBlanco">LISTA DE MATERIAS</router-link></v-btn>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up" />
    </v-app-bar>
    <RouterView/>
  </v-app>


</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logoPath: require('./assets/logoTec.png')
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
