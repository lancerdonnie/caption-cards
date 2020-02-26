import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveTag } from '../../redux/actions/capCardActions';
import Spinner from '../Spinner/Spinner';
const AddTag = props => {
  const [tag, setTag] = useState('');

  const handleTagInput = e => {
    setTag(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (tag.length > 0) props.saveTag(tag);
  };
  return (
    <div className='captioncont'>
      <form onSubmit={handleSubmit} className='caption'>
        <p>Add tag</p>
        <input onChange={handleTagInput} value={tag} type='text' />
        <button type='submit'>
          {props.adding ? <Spinner small /> : 'Add'}
        </button>
        <span onClick={props.handleShowAddTag}>
          {' '}
          <i className='fas fa-times' />
        </span>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    adding: state.capCard.adding
  };
};
const mapDispatchToProps = dispatch => {
  return {
    saveTag: tag => dispatch(saveTag(tag))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTag);
