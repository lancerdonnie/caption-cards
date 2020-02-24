import React, { useState } from 'react';

const Select = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('Select one');
  return (
    <div>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className='dropdown'
      >
        {value}
      </div>
      {show && (
        <div
          className='select'
          onClick={() => {
            setShow(!show);
          }}
        >
          <div
            onClick={e => {
              setShow(!show);
              setValue(e.target.innerText);
            }}
          >
            option1
          </div>
          <div>option2</div>
        </div>
      )}
    </div>
  );
};

export default Select;
