import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import TypeAnimation from "../components/typeAnimation";
import * as styles from "../components/index.module.css";

const moreLinks = [
  {
    text: "Twitter",
    url: "https://twitter.com/Manuel__Mueller"
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/manuel-m%C3%BCller-903673111/",
  },
  {
    text: "GitHub",
    url: "https://github.com/ManuelMueller1st",
  },
];

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/me.png"
        loading="eager"
        width={160}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
    <div className={styles.textStart}>
      <h1>
        <TypeAnimation />
      </h1>
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About me" />;

export default IndexPage;
