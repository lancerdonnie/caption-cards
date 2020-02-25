import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  saveCaption,
  createCaptionWithTags
} from '../../redux/actions/capCardActions';

const AddCaption = props => {
  const [caption, setCaption] = useState('');
  const [showTag, setShowTag] = useState(false);
  const [captionTags, setCaptiontags] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (showTag) {
      if (captionTags.length < 1) {
        props.saveCaption(caption);
      } else {
        props.createCaptionWithTags(caption, captionTags);
      }
    } else {
      props.saveCaption(caption);
    }
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
      setCaptiontags([...captionTags, e.target.value]);
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
        <input
          onChange={handleCaptionInput}
          value={caption}
          type='text'
          placeholder='type a caption'
        />
        <button type='submit'>Add</button>
        <span onClick={props.handleShowAddCaption}>
          <i className='fas fa-times' />
        </span>
        <div>
          <input
            onChange={() => setShowTag(!showTag)}
            type='checkbox'
            name='addtag'
            checked={showTag}
          />
          Add Tags
        </div>
        {showTag && (
          <div>
            {props.tags.map(tag => {
              return (
                <div key={tag.id}>
                  <input
                    onChange={handleAddTags}
                    type='checkbox'
                    value={tag.tag}
                  />
                  {tag.tag}
                </div>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    tags: state.capCard.tags
  };
};
const mapDispatchToProps = dispatch => {
  return {
    saveCaption: caption => dispatch(saveCaption(caption)),
    createCaptionWithTags: (caption, tags) =>
      dispatch(createCaptionWithTags(caption, tags))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCaption);
