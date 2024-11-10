import React from 'react';
import Image from 'next/image';


import styles from "./navigation.module.css";

export default function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={'/images/portfolio-picture.jpeg'} alt={'Blake Archer'} width={100} height={100} />
            </div>
            <ul className={styles.items}>
                <li><a href="/">Home</a></li>
                <li><a href={"/about"}>About</a></li>
                <li><a href={"/projects"}>Projects</a></li>
                <li><a href={"/contact"}>Contact</a></li>
            </ul>
        </div>
    );
}

