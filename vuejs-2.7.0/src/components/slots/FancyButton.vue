<script setup></script>

<template>
  <button class="fancy-button">
    <slot>Submit!</slot>
    <!-- Here the text Submit! is the fallback content when the <FancyButton component not received a slot then the fall back content is render-->
  </button>
</template>

<style>
.fancy-button {
  background-color: cadetblue;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  color: whitesmoke;
}
</style>
