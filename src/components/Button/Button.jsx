import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Btn } from '../Styles.jsx';

const propTypes={
  data:PropTypes.string.isRequired,
}

const Button = ({ data }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Btn
      clr={clicked}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      {data}
    </Btn>
  );
};

Button.propTypes=propTypes

export default Button;
