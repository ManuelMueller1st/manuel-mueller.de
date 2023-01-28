import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import TypeAnimation from '../components/typeAnimation';
import * as styles from '../components/index.module.css';

const moreLinks = [
  {
    text: 'Twitter',
    url: 'https://twitter.com/Manuel__Mueller',
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manuel-m%C3%BCller-903673111/',
  },
  {
    text: 'GitHub',
    url: 'https://github.com/ManuelMueller1st',
  },
  {
    text: 'Credly',
    url: 'https://www.credly.com/users/manuel-muller',
  },
];

const utmParameters = '?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter';

function IndexPage() {
  return (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/me.png"
          loading="eager"
          width={160}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt=""
          style={{ marginBottom: 'var(--space-3)' }}
        />
        <TypeAnimation />
      </div>
      <div className={styles.textCenter}>
        {moreLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <a href={`${link.url}${utmParameters}`}>{link.text}</a>
            {i !== moreLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export function Head() {
  return <Seo title="About me" />;
}

export default IndexPage;
