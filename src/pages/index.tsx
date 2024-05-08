import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* @todo - add format to the form - MUI? */}
          <form method="post" action="https://sendfox.com/form/1v98wy/mppx5d" className="sendfox-form" id="mppx5d" data-async="true" data-recaptcha="true">
            <p><label htmlFor="sendfox_form_email">Email: </label><input type="email" id="sendfox_form_email" placeholder="Email" name="email" required /></p>
            {/* no botz please */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="a_password" tabIndex={-1} defaultValue={''} autoComplete="off" readOnly /></div>
            <p><button type="submit">Step into our multiverse</button></p>
          </form>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
