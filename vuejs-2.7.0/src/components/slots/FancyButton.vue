<script setup></script>

<template>
  <button class="fancy-button">
    <slot>Submit!</slot>
    <!-- Here the text Submit! is the fallback content when the <FancyButton component not received a slot then the fall back content is render-->
  </button>
</template>

<style>
.fancy-button {
  background-color: rgb(15, 83, 161);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  color: white;
  font-size: 1.2rem;
}
</style>
