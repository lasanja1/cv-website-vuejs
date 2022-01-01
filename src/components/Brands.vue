<template>
  <aside :class="desktopOnly ? 'desktopOnly' : null">
    <span class="brand"
      ><img
        src="../assets/images/editorial/company.png"
        loading="lazy"
        alt="company logo"
    /></span>
    <span class="brand"
      ><img
        src="../assets/images/editorial/company.png"
        loading="lazy"
        alt="company logo"
      />
    </span>
    <span class="brand"
      ><img
        src="../assets/images/editorial/company.png"
        loading="lazy"
        alt="company logo"
    /></span>
    <span class="brand"
      ><img
        src="../assets/images/editorial/company.png"
        loading="lazy"
        alt="company logo"
    /></span>
  </aside>
</template>

<script>
export default {
  name: "Brands",
  props: {
    msg: String,
    desktopOnly: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style scoped>
aside {
  pointer-events: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
  padding: 0 1rem;
}
img {
  height: 0.8rem;
  filter: grayscale(100%);
  opacity: 0.4;
}
.brand {
  padding: 1rem;
}

img[alt~="bridgestone"] {
  min-width: 1rem;
  min-height: 1rem;
}
img[alt~="fiat"] {
  min-height: 3rem;
}
img[alt~="ikarbus"] {
  min-width: 2rem;
  min-height: 2rem;
}
img[alt~="silverstone"] {
  min-width: 5rem;
  min-height: 2rem;
}

@media (max-width: 650px) {
  .desktopOnly {
    display: none;
  }
}

@media screen and (max-height: 700px) {
  .desktopOnly {
    display: none;
  }
}
</style>
