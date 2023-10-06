<script setup lang="ts">
import websiteContent from '../data.json';
import SocialIcon from './SocialIcon.vue';

const footerContent = websiteContent.footer;
</script>

<template>
    <div class="footer-container">
        <img class="footer-container__logo" src="../assets/logo.png" />
        <div class="footer-container__social-wrapper">
            <SocialIcon v-for="item in footerContent.socials" :variant="item.name" v-bind:key="item.name" />
        </div>
        <p class="footer-container__copyright-text">{{ footerContent.copy_rightText }}</p>
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
    gap: 2rem;

    &__logo {
        width: 240px;
        height: 70px;
    }

    &__social-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 16.5%;
        margin-bottom: 0.5rem;
    }

    &__copyright-text {
        text-transform: uppercase;
        letter-spacing: 0.05em;
        line-height: 24px;
    }
}
</style>