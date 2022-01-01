<template>
  <header>
    <Avatar />
    <Navigation :links="links" />
    <Brands :desktopOnly="true"/>
  </header>
</template>
 
<script>
import Avatar from "./Avatar.vue";
import Navigation from "./Navigation.vue";
import Brands from "./Brands.vue";

export default {
  name: "Header",
  components: {
    Avatar,
    Navigation,
    Brands,
  },
  data() {
    return {
      links: ["About", "Career", "Portfolio",  "Skills", "Education", "Contact"],
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 25%;
  max-width: 350px;
  min-width: 280px;
  background-color: #0075ff;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 1;
  overflow: auto;
}

@media (max-width: 650px) {
  header {
    max-width: initial;
    width:initial;
    height: 155px;
    justify-content: space-between;
  }
}
</style>
