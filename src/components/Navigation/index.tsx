import React from 'react';
import Image from 'next/image';
import { IoHomeOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import styles from './navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.container}>
            <div className={styles.profile}>
                <Image
                    src="/images/portfolio-picture.jpeg"
                    alt="Blake Archer"
                    width={80}
                    height={80}
                    className={styles.profileImage}
                />
                <h2 className={styles.name}>Blake Archer</h2>
                <p className={styles.title}>Full Stack Developer</p>
            </div>
            <ul className={styles.menu}>
                <li>
                    <a href="/" className={styles.link}>
                        <IoHomeOutline className={styles.icon} />
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" className={styles.link}>
                        <FaUser className={styles.icon} />
                        About
                    </a>
                </li>
                <li>
                    <a href="/projects" className={styles.link}>
                        <FaProjectDiagram className={styles.icon} />
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    );
}
