// Import i18next và initReactI18next
const i18n = require("i18next");
const { initReactI18next } = require("react-i18next");

// Định nghĩa các ngôn ngữ và nguồn dữ liệu
export const locales = {
    vi: 'Tiếng Việt',
    en: 'English',
};

const resources = {
    en: {
        translation: {
            "all categories": "All Categories",
        },
    },
    vi: {
        translation: {
            "all categories": "Tất cả danh mục",
        },
    },
};

// Sử dụng initReactI18next và cấu hình i18n
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'vi', // Ngôn ngữ mặc định
        fallbackLng: 'en', // Ngôn ngữ dự phòng
        interpolation: {
            escapeValue: false,
        },
    });