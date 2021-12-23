<template>
    <PageTitle :pageTitle="pageTitle" pageDescription="The content you are looking for does not exists."/>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
  name: 'ErrorPage',
  components: {PageTitle},
  props: {
    pageTitle: String,
  },
  data() {
    return {
      pageTitle: this.$route.name,
    }
  }
}
</script>

<style scoped></style>
