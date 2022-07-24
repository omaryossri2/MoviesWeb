<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  background-color: cyan;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0.1rem;
}
html {
  padding: 0;
  backface-visibility: hidden;
  margin: 0;
}
body {
  padding: 0;
  backface-visibility: hidden;
  margin: 0;
}
</style>
