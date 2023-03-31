'use client'

export default function LanguageSwitch () {
  /*const [cookie, setCookie] = useCookies(['NEXT_LOCALE'])
  const router = useRouter()
  const { locale } = router

  const switchLanguage = (e) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
    if (cookie.NEXT_LOCALE !== locale) {
      setCookie('NEXT_LOCALE', locale, { path: '/' })
    }
  }*/

  return (
    <select

    >
      <option value='en'>EN</option>
      <option value='es'>ES</option>
    </select>
  )
}
