<template>
  <div class="timer">
    <div class="timer__layout">
      <button class="timer__language-btn btn">
        <span>RU</span>
        <span>EN</span>
      </button>
      <button class="timer__theme-btn btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg>
      </button>
      <div class="timer__display"><span></span></div>
      <button class="timer__reset-timer-btn btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z"/></g></svg>
      </button>
      <button class="timer__theory-mode-btn">Theory</button>
      <button class="timer__practice-mode-btn">Practice</button>
      <button class="timer__start-stop-timer-btn btn">
        <!-- This is start icon. -->
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        <!-- This is stop icon. -->
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
