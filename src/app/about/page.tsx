import Image from 'next/image';

import styles from '../page.module.css';
import aboutStyles from './about.module.css';

export default function Page() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={aboutStyles.header}>
                    <h1>About <span className={'highlight'}>Me</span></h1>
                </div>
                <div className={aboutStyles.content}>
                    <div style={{ position: 'relative'}}>
                        <div className={aboutStyles.imageBackground}></div>
                        <div className={aboutStyles.imageContainer}>
                            <Image src={'/images/portfolio-picture.webp'} alt={'Family Picture'} width={200} height={300}  />
                        </div>
                    </div>
                    <div className={aboutStyles.information}>
                        <h2>Hello!</h2>
                        <p>I’m Blake Archer, a dedicated full stack developer with over 4 years of experience, including more than 2.5 years professionally. My journey into coding took an unconventional path—I spent nearly 8 years working as a server at Cracker Barrel. When COVID-19 hit, I decided to pivot, discovering through YouTube and countless Google searches that I could learn to code without a traditional college degree.</p>
                        <p>Initially, I explored web development independently until a family friend stepped in as a mentor, guiding me through the intricacies of full stack development for over a year and a half. This mentorship became a pivotal part of my growth, setting me on a focused path toward becoming a proficient developer.</p>
                        <p>I specialize in JavaScript, primarily working with React and Next.js for frontend projects and using Node.js with Express on the backend. My work spans diverse projects, and I love the problem-solving and creativity that full stack development allows.</p>
                        <p>Outside of coding, I’m a big fan of the St. Louis Cardinals and Tennessee Titans. I’m also a father of three amazing girls and I do enjoy spending time outdoors, despite what my gaming habits might suggest.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
