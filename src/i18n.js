import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ru from './locales/ru.json'
import vi from './locales/vi.json'
import zh from './locales/zh.json'

// Get language from URL parameter
const getLanguageFromURL = () => {
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get('lang')

    // Valid languages
    const validLanguages = ['vi', 'en', 'zh', 'ru']

    if (langParam && validLanguages.includes(langParam)) {
        return langParam
    }

    // Default to English
    return 'en'
}

const initialLanguage = getLanguageFromURL()

i18n
    .use(initReactI18next)
    .init({
        resources: {
            vi: { translation: vi },
            en: { translation: en },
            zh: { translation: zh },
            ru: { translation: ru },
        },
        lng: initialLanguage,
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
