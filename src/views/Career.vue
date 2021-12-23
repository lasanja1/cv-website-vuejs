<template>
    <PageTitle :pageTitle="pageTitle"/>
    <Timeline :items="items"/>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Timeline from '@/components/Timeline.vue'
import copy from '@/assets/Copy.js'

export default {
  name: 'Career',
  components: {PageTitle, Timeline},
  data() {
    return {
      pageTitle: this.$route.name,
      items: copy.career,
    }
  }
}
</script>

<style scoped></style>
