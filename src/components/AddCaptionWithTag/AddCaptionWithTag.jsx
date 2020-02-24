import React, { useState } from 'react';
import './AddCaptionWithTag.css';
import AddCaption from './AddCaption';
import AddTag from './AddTag';

const AddCaptionWithTag = () => {
  const [showAddCaption, setShowAddCaption] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);

  const handleShowAddCaption = () => {
    setShowAddCaption(!showAddCaption);
  };
  const handleShowAddTag = () => {
    setShowAddTag(!showAddTag);
  };

  return (
    <div className='add'>
      <div onClick={handleShowAddCaption}>Add Caption</div>
      <div onClick={handleShowAddTag}>Add Tag</div>
      {showAddCaption && (
        <AddCaption handleShowAddCaption={handleShowAddCaption} />
      )}
      {showAddTag && <AddTag handleShowAddTag={handleShowAddTag} />}
    </div>
  );
};

export default AddCaptionWithTag;
