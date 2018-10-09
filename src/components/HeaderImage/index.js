import React from 'react';
import { Link } from "gatsby"

import Wrapper from './Wrapper';
import imgSrc from '../../opm-logo.png';

function HeaderImage() {
  return (
    <Wrapper>
      <Link to="/">
        <img alt="logo" src={imgSrc} />
      </Link>
    </Wrapper>
  );
}

export default HeaderImage;