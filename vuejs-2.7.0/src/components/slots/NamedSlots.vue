<script setup></script>
<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div class="banner">
    <slot name="banner"></slot>
  </div>
  <div class="content">
    <slot></slot>
  </div>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>
<style scoped>
* {
  color: black;
}

.header {
  background-color: beige;
}

.banner {
  background-color: aquamarine;
}

.content {
  background-color: cadetblue;
}

.footer {
  background-color: coral;
}
</style>
