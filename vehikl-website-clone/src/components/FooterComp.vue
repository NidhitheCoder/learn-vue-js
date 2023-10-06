<script setup lang="ts">
import SocialIcon from '@/shared/icons/SocialIcon.vue';
import websiteContent from '../data.json';

const footerContent = websiteContent.footer;
</script>

<template>
    <div class="footer-container">
        <img src="../assets/logo.png" />
        <div class="footer-container__social-wrapper">
            <SocialIcon v-for="item in footerContent.socials" :variant="item.name" v-bind:key="item.name" />
        </div>
        <p>{{ footerContent.copy_rightText }}</p>
    </div>
</template>

<style lang="scss" scoped>
.footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
    color: $color-primary-light;
    gap: 0.5rem;

    &__social-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 10%;
    }
}
</style>