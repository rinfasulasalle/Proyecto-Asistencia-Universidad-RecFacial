<template>
  <!-- <img alt="Vue logo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrqOSD0k9Pq9gIbfG0oKpjZ_DVHFvQG3W0WriClYr_4Etj5LKZJwggUESqbAA8q5LDg7i2PeEr2mTZ2D7GhqqLndTckIkf4jy1O3-lB2yciHaO938CSswLJZAvldYFLCutVHYO89GSld7ngbBbItFLnWSIeJJk4MxiUi0Xt5d8wM5oreDK_6q-LXbCWA/s320/zyro-image.png"> -->
  <CmpGrupoUsuarios/>
  <CmpProfesores/>
  <CmpCamara/>
</template>

<script>

//import CmpCamara from './components/CmpCamara.vue'
//import CmpMenu from './components/CmpMenu.vue'

import CmpGrupoUsuarios from './components/CmpGrupoUsuarios.vue'
import CmpProfesores from './components/CmpProfesores.vue'
import CmpCamara from './components/CmpCamara.vue'

export default {
  name: 'App',
  components: {
    CmpGrupoUsuarios,
    CmpCamara,
    //CmpMenu,
    CmpProfesores
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
