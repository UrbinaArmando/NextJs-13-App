const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['es'],
  detection: {
    order: ['cookie', 'localStorage', 'navigator'],
    caches: ['cookie']
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
})
