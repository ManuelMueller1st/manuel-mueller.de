import PropTypes from 'prop-types';
import * as React from 'react';
import Typical from 'react-typical';

const propTypes = {
  steps: PropTypes.arrayOf(String),
};

const defaultProps = {
  steps: [
    'Hello 👋 my name is Manuel',
    1000,
    'I am a Cloud Consultant',
    1000,
    'Vist me on social media 👇',
  ],
};

function TypeAnimation({ steps }) {
  return (
    <div>
      <Typical wrapper="span" steps={steps} loop={1} className="caca" />
    </div>
  );
}

TypeAnimation.propTypes = propTypes;
TypeAnimation.defaultProps = defaultProps;

export default TypeAnimation;
