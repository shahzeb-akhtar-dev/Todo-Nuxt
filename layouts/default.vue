<template>


  <div class="row p-5 sideBar">
    <div class="col-6" style="margin: auto;">

      <NavBar />

    </div>
    <div class="col-6 m-0 view">

      <Nuxt />

    </div>

  </div>

</template>

<script>

import NavBar from '../components/navBar.vue';
export default {
  components: { NavBar }
}
</script>

<style>
.sideBar{
height: 100vh;
}
</style>
