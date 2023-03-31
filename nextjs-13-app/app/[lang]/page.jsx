import styles from './page.module.css'
import Title from '@/components/Title/Title'
import Image from 'next/image'
import '@/styles/grid.css'

const icons = [
  'angular.png',
  'php.png',
  'sql.png',
  'net.png'
]
export default function homePage () {
  return (
    <>
      <main className={styles.description}>
        <section className={styles.section}>
          <div className='row'>
            <div className='col'>
              <Title />
            </div>
          </div>
          <p>As a 25-year-old software developer with 2 years of experience, my name is Armando Urbina and I have developed expertise in a range of technologies including Angular,  PHP, SQL Server, and .NET.</p>
          <figure className={styles.icons}>
            {icons.map(element =>
              <Image key={element} src={`/icon/${element}`} alt='avatar.jpg' width='50' height='50' className={styles.icon} />
            )}
          </figure>
        </section>
        <section className={`${styles.section} ${styles.section_resume}`}>
          <p> Through my work experience, I have honed my analytical skills, problem-solving abilities, and attention to detail.</p>

          <p> During my time in the industry, I have been involved in a variety of projects, ranging from developing web applications to creating customized software solutions for clients. I have experience in both front-end and back-end development, including creating and maintaining databases, designing user interfaces, and developing server-side functionality.</p>
        </section>

        <section className={styles.section}>
          <p>I have had the opportunity to work in various settings, from startups to established corporations, and have gained valuable experience collaborating with teams across different departments. My skills in project management have enabled me to be an effective team player, as well as to work independently.</p>
        </section>
        <section className={`${styles.section} ${styles.section_resume}`}>
          <p>As a software developer, I am passionate about learning new technologies and staying current with the latest advancements in the field. I am constantly seeking out new challenges and opportunities to further develop my skills.</p>

          <p>Overall, I am a dedicated and hard-working developer with a solid foundation of technical knowledge and a drive to continually improve. I am excited about the future of the software development industry and am eager to make a meaningful contribution to its growth.</p>
        </section>

      </main>

    </>
  )
}
