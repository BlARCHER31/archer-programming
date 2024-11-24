"use client";

import { useState } from 'react';
import Image from 'next/image';
import { IoHomeOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { IoMenu, IoClose } from 'react-icons/io5';
import styles from './navigation.module.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.container}>
            <div className={styles.header}>
                <Image
                    src="/images/portfolio-picture.jpeg"
                    alt="Blake Archer"
                    width={50}
                    height={50}
                    className={styles.profileImage}
                />
                <h2 className={styles.name}>Blake Archer</h2>
                <button className={styles.menuToggle} onClick={toggleMenu}>
                    {isOpen ? <IoClose className={styles.menuIcon} /> : <IoMenu className={styles.menuIcon} />}
                </button>
            </div>
            <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
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
