<template>
  <div id="app">\
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'App',

  components:{
    Nav
  }
}
</script>

<style>
#app {
  margin: -8px;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

</style>
