'use-client'
import styles from './Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitch from '../Language/Language'
const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Skills',
    route: '/skills'
  },
  {
    label: 'Projects',
    route: '/projects'
  }
]
export default function Navigation () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) =>
            <li key={route} className={styles.element}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          )}
          <li>
            <Link href='https://github.com/UrbinaArmando' target='_blank' rel='noopener noreferrer'>
              <Image src='/icon/github2.png' alt='github.png' width='50' height='50' />
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/armando-urbina-hernandez-548698207/' target='_blank' rel='noopener noreferrer'>
              <Image src='/icon/linkedin.png' alt='linkedin.png' width='40' height='40' />
            </Link>
          </li>
          <li>
            <LanguageSwitch />
          </li>
          <Image src='/avatar4.jpg' alt='avatar2.jpg' width='60' height='50' className={styles.avatar} />
        </ul>
      </nav>
    </header>
  )
}
