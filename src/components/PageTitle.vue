<template>
  <h2>{{ pageTitle }}</h2>
  <p v-if="pageDescription">{{ pageDescription }}</p>
</template>

<script>
export default {
  name: 'Main',
  props: {
    pageTitle: String,
    pageDescription: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
h2 {
font-size: 2rem;
text-align: center;
margin-bottom: 5rem;
}

p {
  width: 100%;
    max-width: 900px;
    margin: 2rem auto 5rem auto;
    text-align: center;
}

@media (max-width: 650px) {
  h2 {
    margin-bottom: 1rem;
  }
}
</style>
