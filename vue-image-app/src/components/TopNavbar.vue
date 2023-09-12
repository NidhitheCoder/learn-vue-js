<script setup></script>

<template>
    <div class="nav-container">
        <div class="top-nav-section">
            <div>
                <img src="" />
                <h2 class="category-text">CATEGORIES</h2>
            </div>
            <div>
                <div class="submit-answer">
                    <p>SUBMIT YOUR ANSWER</p>
                </div>
            </div>
        </div>
        <div class="bottom-nav-section">

        </div>
    </div>
</template>

<style scoped>
.nav-container {
    width: 100%;
    height: 14vh;
}

.top-nav-section {
    height: 8vh;
    background-color: white;
    border-bottom: 1px solid rgb(245, 240, 240);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-nav-section>* {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.submit-answer {
    background-color: rgb(92, 155, 92);
    color: white;
    font-weight: 600;
    height: 100%;
    display: grid;
    place-items: center;
    padding: 0.2rem 0.5rem;
}

.category-text {
    color: #293948
}
</style>