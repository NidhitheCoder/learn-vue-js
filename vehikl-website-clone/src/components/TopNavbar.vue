<script setup></script>
<template>
    <div class="navigation-container">
        <div class="logo-wrapper">
            <img src="../assets/logo.png">
        </div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/how-we-work">How we work</router-link>
            <router-link to="/team">Team</router-link>
            <router-link to="/hiring">We're Hiring</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.navigation-container {
    width: 100%;
    margin: auto;
    display: flex;
    padding: 0 13%;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    background-color: $color-primary-background;
    position: fixed;
}

nav a {
    font-weight: bold;
    color: $color-secondary-text;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem;
}

nav a:hover {
    color: $orange-dark;
}

nav a.router-link-exact-active {
    color: $orange-dark;
}
</style>
