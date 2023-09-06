import PropTypes from 'prop-types';
import * as React from 'react';
import { TypeAnimation } from 'react-type-animation';

const propTypes = {
  sequence: PropTypes.arrayOf(String),
};

const defaultProps = {
  sequence: [
    'Hello 👋 my name is Manuel',
    1000,
    'I am a Cloud Consultant focusing on AWS',
    1000,
    'I am a Cloud Consultant focusing on Terraform',
    1000,
    'I am a Cloud Consultant focusing on Kubernets',
    1000,
    'I am a Cloud Consultant focusing on Helm',
    1000,
    'Vist me on social media 👇',
  ],
};

function Type({ sequence }) {
  return (
    <div>
      <TypeAnimation wrapper="span" sequence={sequence} repeat={Infinity} className="caca" />
    </div>
  );
}

Type.propTypes = propTypes;
Type.defaultProps = defaultProps;

export default Type;
