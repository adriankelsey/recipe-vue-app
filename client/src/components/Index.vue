<template>
  <div class="index">
    <Nav/>
    <h1>{{this.msg}}</h1>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'Index',
  components: {
    Nav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
