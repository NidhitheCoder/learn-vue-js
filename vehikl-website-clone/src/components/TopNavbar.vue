<script setup>
import websiteContent from '../data.json';
import ROUTES from '../constants/routes'

const {
    contactLabel,
    hiringLabel,
    homeLabel,
    howWeWorkLabel,
    logo,
    teamLabel,
} = websiteContent.navbar;

</script>

<template>
    <div class="navigation-container">
        <div class="logo-wrapper">
            <img :src="logo">
        </div>
        <nav>
            <router-link :to="ROUTES.Home.path">{{ homeLabel }}</router-link>
            <router-link :to="ROUTES.HowWeWork.path">{{ howWeWorkLabel }}</router-link>
            <router-link :to="ROUTES.Team.path">{{ teamLabel }}</router-link>
            <router-link :to="ROUTES.Hiring.path">{{ hiringLabel }}</router-link>
            <router-link :to="ROUTES.Contact.path">{{ contactLabel }}</router-link>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.navigation-container {
    width: 100%;
    margin: auto;
    display: flex;
    padding: 0 20%;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    background-color: $color-primary-background;
    position: fixed;
    border-bottom: 2px solid $color-primary-faded;
}

nav a {
    font-weight: bold;
    color: $color-secondary-text;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem;
    font-size: 14px;
}

nav a:hover {
    color: $color-orange-dark;
}

nav a:active nav>a::after {
    background-color: $color-orange-dark;
    height: 2px;
    width: 100%;
    position: absolute;
    content: '';
}

nav a.router-link-exact-active {
    color: $color-orange-dark;
}
</style>
