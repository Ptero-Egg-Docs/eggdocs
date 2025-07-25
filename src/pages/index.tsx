import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img
                    src="/img/logo160x.png"
                    alt="Pterodactyl Logo"
                    style={{
                        width: '160px',
                        height: '160px',
                        marginBottom: '1rem',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                />
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/getting-started">
                        Get Started with Eggs
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Homepage"
            description="Unofficial Documentation for the Pterodactyl Egg system">
            <HomepageHeader />
            <main>
                <div className={styles.homepagecontent}>
                    <h1>Welcome to the Pterodactyl Egg Documentation!</h1>
                    <p>
                        This is an <strong>unofficial</strong> documentation for the Pterodactyl Egg system, created by voluntary contributors to fill the gap in official resources.<br/>
                        Our goal is to provide clear and comprehensive guidance for managing and creating Eggs within the Pterodactyl panel.
        </p>
        <p style={{ marginTop: '1em', color: '#c00', fontWeight: 'bold' }}>
            This is still a work in progress!
        </p>
                </div>
            </main>
        </Layout>
    );
}