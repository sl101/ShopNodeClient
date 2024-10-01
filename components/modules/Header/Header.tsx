'use client'
import { useLang } from '@/hooks/useLang'

export const Header = () => {
  const { lang, translations } = useLang()
  return (
    <header>
      <div className='container'>
        <div className='logo'>Logo</div>
        <div>{translations[lang].header.profile}</div>
        <div>{translations[lang].header.logout}</div>
      </div>
    </header>
  )
}
