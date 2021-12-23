<template>
  <PageTitle :pageTitle="pageTitle" />
  <Icons :data="icons" />
  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
  </p>
  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
  <p>
    Feel free to <router-link class="accent" :to="{ name: 'Contact' }">contact me</router-link> if you have any questions.
  </p>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import Icons from "@/components/Icons.vue";

export default {
  name: "About",
  components: { PageTitle, Icons },
  data() {
    return {
      pageTitle: this.$route.name,
      icons: [
        {
          title: "Date of birth",
          iconName: "birthday-cake",
          href: "",
        },
        {
          title: "Location",
          iconName: "location-arrow",
          href: "",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
p {
  width: 100%;
  max-width: 900px;
  margin: 1rem auto;
}

</style>
