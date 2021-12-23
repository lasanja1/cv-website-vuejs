<template>
    <div>
        <label for="skill">{{skill}}</label>
        <br>
        <progress id="skill" :value="percentage" max="100"> {{percentage}}% </progress>
    </div>
</template>

<script>
export default {
    name: 'SkillLevel',
    props: {
        skill: String,
        percentage: Number,
    }
}
</script>

<style scoped>
progress {
    padding: 1rem;
}
</style>

