<script setup>
import websiteContent from '../data.json';

const { bannerTitle, bannerText, bannerCard } = websiteContent.hiring;

</script>

<template>
    <div class="banner">
        <h1>{{ bannerTitle }}</h1>
        <p> {{ bannerText }}</p>
        <div>
            <h1>{{ bannerCard.title }}</h1>
            <p>{{ bannerCard.text }} </p>
            <p>{{ bannerCard.subtext }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.banner {
    background-image: linear-gradient(to top, $color-primary-background, $color-primary-background, transparent), url('../assets/banner.webp');
    height: 85vh;
    border-bottom: 2px solid $color-primary-faded;
    color: $color-secondary-text;
    padding: 0 17%;
}
</style>