import React, { useState } from 'react';
import { Btn } from '../Styles.jsx';

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

export default Button;
