import React, { useState } from 'react';
import './AddCaptionWithTag.css';

const AddCaptionWithTag = () => {
  const [showAddCaption, setShowAddCaption] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);

  const [showTag, setShowTag] = useState(false);
  const [caption, setCaption] = useState('');
  const [captionTags, setCaptiontags] = useState([]);

  const handleShowAddCaption = () => {
    setShowAddCaption(!showAddCaption);
  };
  const handleShowAddTag = () => {
    setShowAddTag(!showAddTag);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleCaptionInput = e => {
    setCaption(e.target.value);
  };
  const handleAddTags = e => {
    //check if tag is among checked tags
    const isTag = captionTags.find(tag => {
      return tag === e.target.value;
    });
    if (!isTag) {
      setCaptiontags([...captionTags, isTag]);
    } else {
      const RemoveTag = captionTags.filter(tag => {
        return tag !== e.target.value;
      });
      setCaptiontags(RemoveTag);
    }
  };
  return (
    <div className='add'>
      <div onClick={handleShowAddCaption}>Add Caption</div>
      <div onClick={handleShowAddTag}>Add Tag</div>
      {showAddCaption && (
        <div className='captioncont'>
          <form onSubmit={handleSubmit} className='caption'>
            <p>Add Caption</p>
            <input onChange={handleCaptionInput} value={caption} type='text' />
            <button type='submit'>Add</button>
            <span onClick={handleShowAddCaption}>X</span>
            <label htmlFor='addtag'>Add to Tags</label>
            {showAddTag && (
              //tag must exist in db
              <>
                <div>
                  <input
                    onChange={handleAddTags}
                    type='checkbox'
                    value='option1'
                  />
                  option1
                </div>
                <div>
                  <input
                    onChange={handleAddTags}
                    type='checkbox'
                    value='option2'
                  />
                  option2
                </div>
              </>
            )}
          </form>
          <input
            onChange={() => setShowTag(!showTag)}
            type='checkbox'
            name='addtag'
            checked={showTag}
          />
        </div>
      )}
      <div className='captioncont'>
        <form className='caption'>
          <p>Add tag</p>
          <input type='text' />
          <button type='submit'>Add</button>
          <span onClick={showAddTag}>X</span>
        </form>
      </div>
      {/* <div className='tag'></div> */}
    </div>
  );
};

export default AddCaptionWithTag;
