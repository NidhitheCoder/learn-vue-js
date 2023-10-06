<script setup>
import websiteContent from "../data.json";

const {
    // appendData,
    bannerText,
    bannerTitle,
    backgroundURL,
    getInTouchLabel,
    getInTouchSubtext,
    locationLabel,
    // locations,
    // mailLabel,
    // mapLabel,
    // messageLabel,
    // nameLabel,
    // submitLabel
} = websiteContent.contact;
</script>


<template>
    <div class="banner"
        :style="{ background: `linear-gradient(rgba(17, 24, 39, 0.6), rgb(17, 24, 39), rgb(17, 24, 39)), url('${backgroundURL}')` }">
        <div class="banner__content-wrapper">
            <h1>{{ bannerTitle }}</h1>
            <p>{{ bannerText }}</p>
        </div>
        <div class="contact-details">
            <div class="contact-details__form-wrapper">
                <h1>{{ getInTouchLabel }}</h1>
                <p>{{ getInTouchSubtext }}</p>
            </div>
            <div class="contact-details__location-wrapper">
                <h1>{{ locationLabel }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.banner {
    background-position: center !important;
    background-size: cover !important;
    color: $color-secondary-text;
    padding: 0 21%;
    display: flex;
    flex-direction: column;

    &__content-wrapper {
        min-height: 35vh;
        padding: 4rem 1rem;
        max-width: 65ch;
    }

    h1 {
        font-size: 3rem;
        line-height: 1;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }
}

.contact-details {
    display: grid;
    grid-template-columns: 9fr 3fr;

    &__form-wrapper {
        display: flex;
        flex-direction: column;
    }

    &contact-details__location-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>