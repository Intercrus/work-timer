<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "timer-btn"
}
</script>

<style scoped>
.btn {
  background: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  padding: 20px 5px;
}

:slotted(.btn svg) {
  fill: var(--text-color);
}

.btn:hover {
  background-color: var(--accent-color);
  cursor: pointer;
}

.btn--active {
  background: var(--accent-color);
}
</style>
