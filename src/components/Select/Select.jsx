import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTagToCaption } from '../../redux/actions/capCardActions';
import './Select.css';

const propTypes={
  id:PropTypes.number.isRequired
}

const Select = props => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({ tag: 'Add Tag' });

  const handleAdd = () => {
    //sets the tag to be added to caption
    if (value.tag === 'Add Tag') return;
    props.addTagToCaption(props.captionId, value.id);
  };

  return (
    <div className='addselect'>
      <span className='dropdown'>
        <span
          onClick={() => {
            setShow(!show);
          }}
        >
          {value.tag}
        </span>
        <span className='divider'></span>
        <span onClick={handleAdd}>
          <i className='fas fa-plus' />
        </span>
      </span>
      {show && (
        <div
          className='select'
          onClick={() => {
            setShow(!show);
          }}
        >
          {props.tags.map(tag => {
            return (
              <div
                key={tag.id}
                onClick={e => {
                  setShow(!show);
                  setValue(tag);
                }}
              >
                {tag.tag}
              </div>
            );
          })}
        </div>
      )}
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
    addTagToCaption: (captionId, tagId) =>
      dispatch(addTagToCaption(captionId, tagId))
  };
};

Select.propTypes=propTypes

export default connect(mapStateToProps, mapDispatchToProps)(Select);
