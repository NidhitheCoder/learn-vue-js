<script setup></script>
<template>
  <div class="card success">
    <slot name="success">-----</slot>
  </div>
  <div class="card error">
    <slot name="error">-----</slot>
  </div>
</template>
<style>
.card {
  border-radius: 4px;
  padding: 1rem;
  font-weight: 600;
  text-transform: capitalize;
}

.success {
  background-color: rgb(208, 238, 208);
  border: 2px solid green;
  color: green;
}

.error {
  background-color: rgb(243, 173, 173);
  border: 2px solid rgb(117, 8, 8);
  color: rgb(117, 8, 8);
}
</style>
