<template>
  <aside>
    <div class="contactWrapper">
      <div v-for="(elem, index) in data" :key="index">
        <span v-if="elem.href === ''"
          ><font-awesome-icon :icon="elem.iconName" />&nbsp;{{
            elem.title
          }}</span
        >
        <a v-else :href="elem.href" :key="index" target="_blank" class="blue">
          <font-awesome-icon :icon="elem.iconName" />&nbsp;{{ elem.title }}
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";

export default {
  name: "Icons",
  components: { PageTitle },
  props: {
    data: {
      type: Array,
    },
  },
};
</script>


<style scoped>
aside {
  padding: 2rem;
}
.contactWrapper {
  width: 100%;
  border-radius: 1px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.contactWrapper div {
  padding: 1rem;
}
a {
  padding: 1rem;
  text-decoration: none;
  color: var(--color-text);
}
.blue {
  color: var(--color-main);
}
.blue svg {
  fill: var(--color-main);
}
</style>