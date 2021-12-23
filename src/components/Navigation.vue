<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link" >
        <router-link :class="this.$route.name === link? 'activeA' : null" :to="{name: link, params: {
          link: link
        }}">{{link}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    links: Array,
  },
    data() {
    return {
      pageTitle: this.$route.name,
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
}
a {
  text-decoration: none;
  letter-spacing: 1px;
  display: block;
  padding: 0.5rem;
  color: var(--color-text);
  font-size: 1.8rem;
}
.activeA, a.router-link-exact-active {
  background: white;
  /* box-shadow: 0 4px 16px var(--shadow-blue); */
}
a.router-link-exact-active:hover {
  background: white;

}
a:hover {
  background: rgba(255, 255, 255, 0.315); 
  /* box-shadow: 0 4px 16px var(--shadow-blue); */
}
a:active {
  background: white;
}
/* .About, .Portfolio, .Career, .Education, .Skills, .Contact {
  background: white;
} */

@media (max-width: 650px) {
  ul {
    display: flex;
    flex-direction: row;
  }
  nav {
    overflow: scroll;
    margin-top: 1rem;
  }
  nav::-webkit-scrollbar {
  width: 0px;
   background: white;
}

nav::-webkit-scrollbar-track {
  background: transparent;
    cursor:grab ;
      border-radius: 20px;
}

nav::-webkit-scrollbar-thumb {
  /* background-color: rgba(59, 59, 59, 0.267); */
   background: transparent;
  border-radius: 20px;
    cursor:grab ;
}
  a {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}
</style>
