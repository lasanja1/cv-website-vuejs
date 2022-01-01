<template>
  <p class="presentTitle">Present</p>
  <div class="timelineContainer">
    <div class="itemContainer" v-for="(item, index) in items" :key="index">
      <div class="dashed">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>

      <article class="flex">
        <div class="positionTitle">
          <h3>{{ item.positionTitle }}</h3>
          at
          <a :href="item.orgUrl" target="_blank">
            <img :src="item.logo" :alt="item.orgName" loading="lazy"
          /></a>
        </div>
        <div class="positionDescription" :title="item.startYear">
          <p v-for="(p, index) in item.paragraphs" :key="index">
            {{ p }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    items: Object,
    paragraphs: Array,
  },
};
</script>

<style scoped>
.timelineContainer {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto 5rem auto;
}
.dashed {
  display: flex;
  height: 40px;
}
.dashed div {
  width: 50%;
}
.dashed div:nth-child(2) {
  height: 40px;
  border-left: 0.4rem dashed var(--color-main);
  box-sizing: border-box;
}
.presentTitle {
  text-align: center;
  color: var(--color-main);
  padding: 2rem 0 1rem 0;
}

.flex {
  display: flex;
  min-height: 50px;
  background: var(--color-lightest-grey);
}
.positionTitle,
.positionDescription {
  width: 50%;
  padding: 2rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.positionTitle,
.positionDescription {
  box-sizing: border-box;
}
.positionTitle {
  margin: auto;
  text-align: right;
}
.positionDescription {
  border-left: 0.4rem solid var(--color-main);
  text-align: left;
  position: relative;
  align-items: end;
}
.positionDescription::after {
  content: attr(title);
  position: absolute;
  padding: 0.5rem 1rem;
  background: var(--color-main);
  width: 2rem;
  bottom: 0;
  left: -35px;
  border-radius: 30px;
  color: white;
}
.present {
  background: transparent !important;
  height: 30px;
}
/* .present div::after {
  background: transparent !important;
} */
a {
  padding: 1rem 0;
}

img {
  max-width: 200px;
  max-height: 80px;
  opacity: 0.5;
  filter: grayscale(1);
}
h3 {
  margin: 1rem 0;
  color: var(--color-main);
  font-size: 1.8rem;
}

@media (max-width: 650px) {
  .dashed div:nth-child(1) {
    display: none;
  }
  .presentTitle {
    text-align: left;
  }
  .flex {
    flex-direction: column;
  }

  .positionTitle,
  .positionDescription {
    padding: 1rem;
    width: 100%;
  }
  .positionTitle {
    border-left: 0.4rem solid var(--color-main);
    text-align: left;
  }
  .positionDescription {
    padding-bottom: 4rem;
  }
}
</style>
