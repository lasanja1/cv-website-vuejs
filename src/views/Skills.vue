<template>
  <PageTitle :pageTitle="pageTitle" />
  <div class="container">
    <div class="skillsWrapper">
      <h3>Technical</h3>
      <SkillLevel
        v-for="skill in skills.Technical"
        :key="Object.keys(skill)[0]"
        :value="skill[Object.keys(skill)[0]]"
        :percentage="skill[Object.keys(skill)[0]]"
        :skill="Object.keys(skill)[0]"
      />
    </div>
    <div class="skillsWrapper">
      <h3>Managerial</h3>
      <SkillLevel
        v-for="skill in skills.Managerial"
        :key="Object.keys(skill)[0]"
        :value="skill[Object.keys(skill)[0]]"
        :percentage="skill[Object.keys(skill)[0]]"
        :skill="Object.keys(skill)[0]"
      />
    </div>
    <div class="skillsWrapper">
      <h3>Languages</h3>
      <SkillLevel
        v-for="skill in skills.Language"
        :key="Object.keys(skill)[0]"
        :value="skill[Object.keys(skill)[0]]"
        :percentage="skill[Object.keys(skill)[0]]"
        :skill="Object.keys(skill)[0]"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import SkillLevel from "@/components/SkillLevel.vue";

export default {
  name: "Skills",
  components: { PageTitle, SkillLevel },
  data() {
    return {
      pageTitle: this.$route.name,
      skills: {
        Language: [{ English: 100 }, { Spanish: 85 }],
        Technical: [
          { CAD: 80 },
          { 'MS Office': 100 },
          { Python: 5 },
          
        ],
        Managerial: [
          { Presentation: 90 },
          { "Project Management": 80 },
          
        ],
      },
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 1rem auto;
  flex-wrap: wrap;
  width: 100%;
}
.skillsWrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #f3f3f3;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
}
h3 {
  padding: 0 0 1rem 0;
}
</style>
