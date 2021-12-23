<template>
   <PageTitle :pageTitle="pageTitle" />
    <Icons :data="icons"/>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Icons from '@/components/Icons.vue'
export default {
  name: 'Contact',
  components: {PageTitle, Icons},
  data() {
    return {
      pageTitle: this.$route.name,
            icons: [
        {
          title: "E-mail",
          iconName: "envelope",
          href: "#",
        },
         {
           title: "LinkedIn",
           iconName: "linkedin",
           href: "#",
         },
      ],
    }
  }
}
</script>

<style scoped>
p {
  width: 100%;
  max-width: 900px;

  margin: 1rem auto;
}

</style>
