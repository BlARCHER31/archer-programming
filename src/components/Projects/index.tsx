import Image from 'next/image';
import { IconType } from 'react-icons';
import Link from 'next/link';
import styles from './projects.module.css';

export interface Technologies {
    name: string;
    icon: IconType;
}

export interface Project {
    name: string;
    description: string;
    link: string;
    image: string;
    technologies: Technologies[];
}

export default function Project({ name, description, link, image, technologies }: Project) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={image} alt={name} fill className={styles.image} />
                <div className={styles.overlay}>
                    <h3 className={styles.overlayTitle}>{name}</h3>
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    <Link href={link} target="_blank" className={styles.link}>
                        {name}
                    </Link>
                </h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.techContainer}>
                    {technologies.map((tech) => {
                        const Icon = tech.icon;
                        return <Icon className={styles.icon} key={tech.name} />;
                    })}
                </div>
            </div>
        </div>
    );
}
