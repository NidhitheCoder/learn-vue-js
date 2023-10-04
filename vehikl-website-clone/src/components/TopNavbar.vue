<script setup></script>
<template>
    <div class="navigation-container">
        <div class="logo-wrapper">Logo</div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/how-we-work">How we work</router-link>
        </nav>
    </div>
</template>

<style scoped>
.navigation-container {
    width: 60%;
    margin: auto;
    display: flex;
    height: 3rem;
    justify-content: space-between;
    align-items: center;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
