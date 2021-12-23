<template>
  <Header />
  <main>
    <div class="mainWrapper">
      <router-view />
    </div>

  </main> 
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },

};
</script>

<style>
* {
  /* border: 1px solid red;  */
  margin: 0;
  padding: 0;
  
}
:root {
  --color-text: #000000a3;
  --color-main: #0075ff;
  --color-accent: #a4ff00;
  --color-lightest-grey: #f9f9f9;

  /* font-size:calc(0.8em + 1vw); */
  /* background: #cccccc; */
  background: var(--color-lightest-grey);
}
body {
  display: flex;
  height: 100vh;
  font-family: sans-serif;
  scrollbar-width: thin;
  box-sizing: border-box;
}

body::-webkit-scrollbar {
  width: 10px;           
}

body::-webkit-scrollbar-track {
  background: lightgrey;       
}

body::-webkit-scrollbar-thumb {
  background-color: var(--color-main);   
  border-radius: 20px;      
}

#app {
  display: flex;
  color: var(--color-text);
  margin: auto;
  min-height: 100vh;
  width: 100%;
  max-width: 2200px;
}

main {
  padding: 1rem;
  width: 80%;
  display: flex;
  background: white;
  min-height: calc(100vh - 100px);
}

.mainWrapper {
  margin: auto;
  padding: 1rem;
  width: 100%;
   box-sizing: border-box;
}
.accent {
  color: var(--color-main);
}

@media (max-width: 650px) {
  #app {
    flex-direction: column;
  }
  main {
    max-width: initial;
    width: initial;
  }
}
</style>
