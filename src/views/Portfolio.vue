<template>
    <PageTitle :pageTitle="pageTitle" :pageDescription="pageDescription"/>
    <PortfolioItem v-for="(item, index) in items" :key="index" :title="item.title" :description="item.description" :figures="item.images"/>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import PortfolioItem from '@/components/PortfolioItem.vue'
import copy from '@/assets/Copy.js'

export default {
  name: 'Portfolio',
  components: {PageTitle, PortfolioItem},
  data() {
    return {
      pageTitle: this.$route.name,
      pageDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      items: copy.portfolio,
    }
  }
}
</script>


