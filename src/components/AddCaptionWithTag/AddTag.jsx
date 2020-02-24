import React, { useState } from 'react';

const AddTag = props => {
  const [tag, setTag] = useState('');

  const handleTagInput = e => {
    setTag(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className='captioncont'>
      <form onSubmit={handleSubmit} className='caption'>
        <p>Add tag</p>
        <input onChange={handleTagInput} value={tag} type='text' />
        <button type='submit'>Add</button>
        <span onClick={props.handleShowAddTag}>X</span>
      </form>
    </div>
  );
};

export default AddTag;
