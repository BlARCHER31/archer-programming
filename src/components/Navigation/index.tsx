import React from 'react';
import Image from 'next/image';

import { IoHomeOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import styles from "./navigation.module.css";


export default function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={'/images/portfolio-picture.jpeg'} alt={'Blake Archer'} width={100} height={100} />
            </div>
            <ul className={styles.items}>
                <li><a href="/"><IoHomeOutline className={styles.icon} /> Home</a></li>
                <li><a href={"/about"}><FaUser className={styles.icon}/> About</a></li>
                <li><a href={"/projects"}><FaProjectDiagram className={styles.icon}/> Projects</a></li>
                <li><a href={"/contact"}><AiOutlineMail className={styles.icon}/> Contact</a></li>
            </ul>
        </div>
    );
}

