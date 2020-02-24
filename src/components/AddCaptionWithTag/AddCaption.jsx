import React, { useState } from 'react';

const AddCaption = props => {
  const [caption, setCaption] = useState('');
  const [showTag, setShowTag] = useState(false);
  const [captionTags, setCaptiontags] = useState([]);

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
    <div className='captioncont'>
      <form onSubmit={handleSubmit} className='caption'>
        <p>Add Caption</p>
        <input onChange={handleCaptionInput} value={caption} type='text' />
        <button type='submit'>Add</button>
        <span onClick={props.handleShowAddCaption}>X</span>
        <label htmlFor='addtag'>Add to Tags</label>
        <input
          onChange={() => setShowTag(!showTag)}
          type='checkbox'
          name='addtag'
          checked={showTag}
        />
        {showTag && (
          //tag must exist in db
          <>
            <div>
              <input onChange={handleAddTags} type='checkbox' value='option1' />
              option1
            </div>
            <div>
              <input onChange={handleAddTags} type='checkbox' value='option2' />
              option2
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default AddCaption;
