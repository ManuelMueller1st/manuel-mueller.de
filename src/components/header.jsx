import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'gatsby';

const propTypes = {
  siteTitle: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  siteTitle: [],
};

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
