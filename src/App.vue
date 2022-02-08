<template>
  <v-app>
    <v-main class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
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

  .fade-enter,
  .fade-leave-to{
    opacity: 0;
    transform: translateX(2em);
  }

  .fade-enter-active,
  .fade-leave-active{
    transition: all 0.3s ease;
  }
</style>

