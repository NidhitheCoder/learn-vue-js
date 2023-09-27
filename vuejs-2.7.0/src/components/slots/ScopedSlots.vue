<script setup></script>
<template>
    <div class="scoped-container">
        <p>Pre Content</p>
        <slot :text="greetingMessage" :count="count">
        </slot>
        <p>Post content</p>
    </div>
</template>
<style scoped>
.scoped-container {
    display: flex;
    flex-direction: column;
    background-color: orangered;
    padding: 1rem;
    color: darkgray;
    border-radius: 4px;
    font-weight: 600;
    gap: 0.5rem;
}
</style>