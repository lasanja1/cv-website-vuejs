<template>
  <article>
    <div class="text">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="figures">
      <div class="scrollYfix">
        <figure v-for="(figure, index) in figures" :key="index">
          <img :src="figure.url" :alt="figure.caption"  loading="lazy" />
          <figcaption>{{ figure.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    figures: Array,
    title: String,
    description: String,
  },
};
</script>

<style scoped>
article {
  display: flex;
  background: var(--color-lightest-grey);
  padding: 2rem 0 2rem 2rem;
  align-items: flex-start;
  max-width: 850px;
  margin: 0 auto 5rem auto;
}
.text {
  width: 30%;
}
h3 {
  color: var(--color-main);
  font-size: 2rem;
}
p {
  margin: 2rem 0;
}
.figures {
  width: 70%;
  overflow: auto;
  margin-left: 3rem;
  scrollbar-width: thin;
}
.scrollYfix {
  display: flex;
}
figure {
  touch-action: pan-x;
  margin-right:2rem;
}


.figures::-webkit-scrollbar {
  width: 10px;
}

.figures::-webkit-scrollbar-track {
  background: lightgrey;
    cursor:grab ;
      border-radius: 20px;
}

.figures::-webkit-scrollbar-thumb {
  background-color: var(--color-main);
  border-radius: 20px;
    cursor:grab ;
}
img {
  max-height: 250px;
}

@media (max-width: 650px) {
article {
  flex-direction: column;
}
.text, .figures {
  width: 100%;
}
.figures {
  margin-left: 0;
}
}
</style>