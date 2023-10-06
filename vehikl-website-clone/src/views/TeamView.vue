<script setup>
import TeamMemberCard from '@/components/TeamMemberCard.vue';
import websiteContent from '../data.json';

const {
    backgroundURL,
    description,
    joinButtonLabel,
    teamMembers,
    title
} = websiteContent.team;

</script>

<template>
    <div class="team-container"
        :style="{ background: `linear-gradient(rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.6), rgb(17, 24, 39)), url('${backgroundURL}')` }">
        <h1 class="team-container__banner-title">{{ title }}</h1>
        <p class="team-container__banner-text">{{ description }}</p>
        <v-btn class="team-container__join-button">{{ joinButtonLabel }}</v-btn>
    </div>
    <div class="team-members-container">
        <TeamMemberCard v-for="member in teamMembers" :key="member.name" :content="member" />
    </div>
</template>

<style scoped lang="scss">
.team-container {
    padding: 4rem 21%;
    background-size: cover !important;
    background-position: center !important;
    height: 100%;

    &__banner-title {
        font-size: 3rem;
        line-height: 1;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: $color-smoke-white;
    }

    &__banner-text {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 500;
        color: $color-secondary-text;
        max-width: 650px;
    }

    &__join-button {
        background-color: $color-orange-dark;
        color: $color-white;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.05em;
        line-height: 1.25rem;
        padding: 0.75rem 1rem;
        margin-top: 2rem;
        height: auto;
        border-radius: 0.5rem;
    }
}

.team-members-container {
    padding: 0 21%;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem;

    &__card {
        flex: 1;
    }


}
</style>