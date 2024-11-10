import { Project } from '@/components/Projects';

// Icons
import { FaReact, FaNodeJs, FaHtml5, FaWordpressSimple } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { SiCss3 } from 'react-icons/si';

export const PROJECT_DATA: Project[] = [
    {
        name: 'OpenGraph.io',
        description: 'SaaS Product for Link Previews',
        link: 'https://opengraph.io',
        image: '/images/opengraph-io-dashboard-square.png',
        technologies: [
            {
                name: 'Next.js',
                icon: RiNextjsFill,
            },
            {
                name: 'React',
                icon: FaReact,
            },
            {
                name: 'Node.js',
                icon: FaNodeJs,
            },
            {
                name: 'PostgreSQL',
                icon: BiLogoPostgresql,
            },
        ],
    },
    {
        name: 'SecureDawn',
        description: 'Marketing Website for SecureDawn',
        link: 'https://securedawn.com',
        image: '/images/secure-dawn-square.webp',
        technologies: [
            {
                name: 'Next.js',
                icon: RiNextjsFill,
            },
            {
                name: 'CSS',
                icon: SiCss3,
            },
            {
                name: 'HTML',
                icon: FaHtml5,
            },
        ],
    },
    {
        name: 'DW Servant Heart Fund',
        description: 'Nonprofit Website',
        link: 'https://www.darrenwelkerservantheartfund.org',
        image: '/images/dwshf-square.webp',
        technologies: [
            {
                name: 'WordPress',
                icon: FaWordpressSimple,
            },
            {
                name: 'CSS',
                icon: SiCss3,
            },
            {
                name: 'HTML',
                icon: FaHtml5,
            },
        ],
    }
]
