<template>
  <div
      v-bind:class="currentTheme === 'light' ? 'light-theme' : 'dark-theme'"
      class="timer"
  >
    <div class="timer__wrapper">
      <div class="timer__layout">
        <button
            v-on:click="changeLanguage"
            class="timer__language-btn btn"
        >
          <span
              v-if="currentLanguage === 'ru'"
          >
            {{ $t('change-language-btn-text-ru') }}
          </span>
          <span
              v-if="currentLanguage === 'en'"
          >
            {{ $t('change-language-btn-text-en') }}
          </span>
        </button>
        <button
            v-on:click="changeTheme"
            class="timer__theme-btn btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><rect fill="none" height="24" width="24"/>
            <!-- Outlined reset icon -->
            <path
                v-if="currentTheme === 'light'"
                d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
            />
            <!-- Filled reset icon -->
            <path
                v-if="currentTheme === 'dark'"
                d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
            />
          </svg>
        </button>
        <div
            v-bind:style="{
              'color': this.currentMode === 'practice' && counter === 0 ? 'green' : null
            }"
            class="timer__display"
        >
          <span>{{ formattedCounter }}</span>
        </div>
        <button class="timer__reset-timer-btn btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z"/></g></svg>
        </button>
        <button
            v-on:click="selectTheoryMode"
            v-bind:class="currentMode === 'theory' ? 'btn--active' : null"
            class="timer__theory-mode-btn btn"
        >
          {{ $t('theory-mode-btn-text') }}
        </button>
        <button
            v-on:click="selectPracticeMode"
            v-bind:class="currentMode === 'practice' ? 'btn--active' : null"
            class="timer__practice-mode-btn btn"
        >
          {{ $t('practice-mode-btn-text') }}
        </button>
        <button
            v-on:click="startStopTimer"
            v-bind:style="{
              'pointer-events': this.currentMode === 'practice' && counter === 0 ? 'none' : 'auto'
            }"
            class="timer__start-stop-timer-btn btn"
        >
          <!-- Start icon -->
          <svg
              v-if="!isPaused"
              xmlns="http://www.w3.org/2000/svg" class="icon" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
          <!-- Stop icon -->
          <svg
              v-if="isPaused"
              xmlns="http://www.w3.org/2000/svg" class="icon" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {i18n} from "@/main";

export default {
  data() {
    return {
      currentTheme: "light",
      currentLanguage: "ru",
      currentMode: "theory",

      counter_id: null,
      counter: 0,
      theoryCounter: 0,
      practiceCounter: 0,

      isPaused: true
    }
  },
  methods: {
    changeTheme() {
      this.currentTheme = this.currentTheme === "light" ? "dark" : "light"
      document.documentElement.className = this.currentTheme === "light" ? "dark-theme" : "light-theme"
    },

    changeLanguage() {
      this.currentLanguage = i18n.global.locale.value === "ru" ? "en" : "ru"
      i18n.global.locale.value = i18n.global.locale.value === "ru" ? "en" : "ru"
    },

    startStopTimer() {
      if (this.isPaused) {
        this.isPaused = false
        this.counter_id = setInterval(() => {
          if (this.currentMode === 'theory') {
            this.counter++
            this.theoryCounter++
          } else if (this.currentMode === 'practice') {
            if (this.counter === 0) {
              this.isPaused = true
              clearInterval(this.counter_id)
              return null
            }
            this.counter--
            this.practiceCounter--
          }
        }, 1000)
      } else if (!this.isPaused) {
        this.isPaused = true
        clearInterval(this.counter_id)
      }
    },

    selectTheoryMode() {
      this.isPaused = true
      this.currentMode = 'theory'
      this.counter = this.theoryCounter
      clearInterval(this.counter_id)
    },

    selectPracticeMode() {
      this.isPaused = true
      this.currentMode = 'practice'
      this.counter = this.practiceCounter
      clearInterval(this.counter_id)
    },
  },
  computed: {
    formattedCounter: function() {
      let c = new Date(null)
      c.setSeconds(this.counter)
      return `${('0' + c.getUTCHours()).slice(-2)}:${('0' + c.getUTCMinutes()).slice(-2)}:${('0' + c.getUTCSeconds()).slice(-2)}`
    }
  },
  watch: {
    theoryCounter: function() {
      this.practiceCounter = this.theoryCounter * 3
    }
  }
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

.btn {
  background: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  padding: 20px 5px;
}

.btn:hover {
  background-color: var(--accent-color);
  cursor: pointer;
}

.btn--active {
  background: var(--accent-color);
}

.icon {
  fill: var(--text-color);
}

.timer__wrapper {
  position: absolute;
  width: 650px;
  margin: auto;
  top: 20%;
  right: 0;
  left: 0;
}

.timer__layout {
  display: grid;
  grid-template-areas:
    "none none none none none none language theme"
    "display display display display display display display display"
    "reset theory theory theory practice practice practice start-stop";
}

.timer__language-btn {
  grid-area: language;
  border-bottom: none;
  font-size: 20px;
}

.timer__theme-btn {
  grid-area: theme;
  border-left: none;
  border-bottom: none;
}

.timer__display {
  grid-area: display;
  padding: 100px;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  background: var(--background-color);
  border-bottom: none;
  font-size: 100px;
  letter-spacing: 5px;
  user-select: none;
}

.timer__reset-timer-btn {
  grid-area: reset;
}

.timer__theory-mode-btn {
  grid-area: theory;
  border-left: none;
  font-size: 20px;
}

.timer__practice-mode-btn {
  grid-area: practice;
  border-left: none;
  font-size: 20px;
}

.timer__start-stop-timer-btn {
  grid-area: start-stop;
  border-left: none;
}
</style>
