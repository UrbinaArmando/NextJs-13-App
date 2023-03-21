import styles from './Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
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
          <Image src='/avatar.jpg' alt='avatar.jpg' width='50' height='50' className={styles.avatar} />
        </ul>
      </nav>
    </header>
  )
}
