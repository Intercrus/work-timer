<template>
  <timer-block></timer-block>
</template>

<script>
import TimerBlock from "@/components/timer-block.vue";

export default {
  name: "App",
  components: {TimerBlock}

}
</script>

<style>
.dark-theme {
  --background-color: #111827;
  --accent-color: #EA5455;
  --text-color: #ffffff;
}

.light-theme {
  --background-color: #ffffff;
  --accent-color: #EA5455;
  --text-color: #111827;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica", sans-serif;
}
</style>
