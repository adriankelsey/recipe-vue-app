<template class="template">
  <div id="app">
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
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
