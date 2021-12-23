<template>
<figure>
  <img src="../assets/images/editorial/janedoe.jpg" alt="jane doe image">
  <figcaption><h1>Name Lastname</h1><p>Title<br>Experience: 5+ years</p></figcaption>
</figure>
</template>

<script>
export default {
  name: 'Avatar',
}
</script>

<style scoped>
figure {
  text-align: center;
  padding: 0 1rem;
}
img {
  width: 60%;
  border-radius: 100%;
  /* outline: .4rem solid var(--dark-blue); */
  max-width: 200px;
}
h1 {
  color: black;
  font-size: 2rem;
  padding: 0.5rem;
}

@media (max-width: 650px) {
  figure {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
  img {
    display: none;
  }
}
</style>
