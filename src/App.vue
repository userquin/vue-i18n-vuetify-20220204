<script setup lang="ts">
import CustomHeader from './components/CustomHeader.vue'
import CustomForm from './components/CustomForm.vue'
</script>

<template>
  <v-app>
    <h1>LOCAL I18N SFC</h1>
    <CustomHeader />
    <br>
    <h1>GLOBAL I18N</h1>
    <CustomHeader global />
    <br>
    <v-main>
      <CustomForm />
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
