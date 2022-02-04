<template>
  <v-app>
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .main{
    height: 100%;
  }

  .teste{
    width: 100%;
    height: 50%;
    background: red;
    position: absolute;
    top: 0;
    z-index: 3;
  }

  .teste2{
    width: 100%;
    height: 50%;
    background: green;
    position: absolute;
    bottom: 0;
    z-index: 3;
  }
</style>

