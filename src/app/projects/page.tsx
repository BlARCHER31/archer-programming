import { PROJECT_DATA } from '../../common/data';
import Project from '@/components/Projects';
import styles from '../page.module.css';

import projectsStyles from './projects.module.css';

export default function Page() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className="highlight">Projects</h1>
                <div className={projectsStyles.grid}>
                    {PROJECT_DATA.map((project) => (
                        <Project key={project.name} {...project} />
                    ))}
                </div>
            </main>
        </div>
    );
}
