import React, { useState, Fragment } from 'react';
import './AddCaptionWithTag.css';
import AddCaption from './AddCaption';
import AddTag from './AddTag';

const AddCaptionWithTag = () => {
  const [showAddCaption, setShowAddCaption] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);

  //show and hide caption and tag modals
  const handleShowAddCaption = () => {
    setShowAddCaption(!showAddCaption);
  };
  const handleShowAddTag = () => {
    setShowAddTag(!showAddTag);
  };

  return (
    <Fragment>
      <div onClick={handleShowAddCaption}>Add Caption</div>
      <div onClick={handleShowAddTag}>Add Tag</div>

      {showAddCaption && (
        <AddCaption handleShowAddCaption={handleShowAddCaption} />
      )}

      {showAddTag && <AddTag handleShowAddTag={handleShowAddTag} />}
    </Fragment>
  );
};

export default AddCaptionWithTag;
