<script setup lang="ts">
import CardTemplate from '@/components/CardTemplate.vue';
import websiteContent from '@/data.json';

const { bannerTitle, bannerText, bannerCard } = websiteContent.hiring;

</script>

<template>
    <div class="banner">
        <div class="banner__content">
            <h1>{{ bannerTitle }}</h1>
            <p> {{ bannerText }}</p>
        </div>
        <CardTemplate variant="normal">
            <div class="card-content">
                <h1>{{ bannerCard.title }}</h1>
                <div class="card-content__line"></div>
                <p class="card-content__text">{{ bannerCard.text }} </p>
                <p class="card-content__subtext">{{ bannerCard.subtext }}</p>
                <v-btn class="card-content__view-button">{{ bannerCard.buttonLabel }}</v-btn>
            </div>
        </CardTemplate>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    background-image: linear-gradient(to top, $color-primary-background, $color-primary-background, transparent), url('../assets/banner.webp');
    background-position: center;
    height: 85vh;
    border-bottom: 1px solid $color-primary-faded;
    color: $color-secondary-text;
    padding: 0 21%;
    display: flex;
    flex-direction: column;

    &__content {
        padding: 4rem 0;
        max-width: 650px;

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }
}

.card-content {
    &__line {
        background-color: $color-orange-dark;
        border-radius: 8px;
        height: 0.3rem;
        width: 5%;
        margin-bottom: 2rem;
    }

    &__text {
        margin-bottom: 1rem;
        color: $color-primary-light;
    }

    &__subtext {
        margin-bottom: 2rem;
        font-size: 1rem;
        font-style: italic;
        line-height: 1.5rem;
        color: $color-primary-light;
    }

    &__view-button {
        background-color: $color-orange-dark;
        color: $color-white;
        font-size: 14px;
        font-weight: 600;
    }
}
</style>