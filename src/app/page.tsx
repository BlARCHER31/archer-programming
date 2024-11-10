import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className=''>Blake <span className={'highlight'}>Archer</span></h1>
        <h2 className=''>Full Stack Developer</h2>
      </main>
    </div>
  );
}
