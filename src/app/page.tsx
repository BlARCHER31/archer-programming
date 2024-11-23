import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Blake <span className={styles.highlight}>Archer</span>
                </h1>
                <h2 className={styles.subtitle}>Full Stack Developer</h2>
                {/*<div className={styles.ctas}>*/}
                {/*    <a href="/projects" className={`${styles.button} ${styles.primary}`}>*/}
                {/*        View Projects*/}
                {/*    </a>*/}
                {/*    <a href="/contact" className={`${styles.button} ${styles.secondary}`}>*/}
                {/*        Get in Touch*/}
                {/*    </a>*/}
                {/*</div>*/}
            </main>
            <footer className={styles.footer}>
                <a href="https://github.com/BlArcher31" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/archer-blake/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </footer>
        </div>
    );
}
