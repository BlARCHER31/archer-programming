import { PROJECT_DATA} from '../../common/data';
import Project from '@/components/Projects';

import styles from '../page.module.css';


export default function Page() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Projects</h1>
                <div style={{ display: 'flex'}}>
                    {PROJECT_DATA.map(project => (
                        <Project key={project.name} {...project} />
                    ))}
                </div>
            </main>
        </div>
    )
}
