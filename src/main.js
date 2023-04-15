import { createApp } from 'vue'
import App from './App.vue'
import {createI18n, useI18n} from "vue-i18n";

const messages = {
    en: {
        "change-language-btn-text-ru": "RU",
        "change-language-btn-text-en": "EN",
        "theory-mode-btn-text": "Theory",
        "practice-mode-btn-text": "Practice"
    },
    ru: {
        "change-language-btn-text-ru": "РУС",
        "change-language-btn-text-en": "АНГЛ",
        "theory-mode-btn-text": "Теория",
        "practice-mode-btn-text": "Практика"
    }
}

export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
}).use(i18n).mount('#app')
