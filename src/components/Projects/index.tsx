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

export default function Project( { name, description, link, image, technologies }: Project ) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={image} alt={name} width={250} height={250} />
            </div>
            <Link className={styles.link} target={'_blank'} href={link}><h3>{name}</h3></Link>
            <p>{description}</p>
            <div >
                {technologies.map(tech => {
                    const Icon = tech.icon;
                    return (
                        <Icon className={styles.icon} key={tech.name} size={35} />
                    )
                })}
            </div>

        </div>
    )
}
