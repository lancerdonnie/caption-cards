import React, { useState, useEffect } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import { connect } from 'react-redux';
import {
  getCaptionsUnderTag,
  clearCaptionsUnderTag
} from '../../redux/actions/capCardActions';

const Search = props => {
  const { getCaptionsUnderTag, clearCaptionsUnderTag } = props;
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState('');
  const [tag, setTag] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
    //run search algo
  };
  const handleSelect = e => {
    setTag(e.target.value);
  };
  const handleSubmit = e => {
    setSearched(search);
    e.preventDefault();
    if (tag === 'alltags' || tag === '') {
      clearCaptionsUnderTag();
    } else {
      getCaptionsUnderTag(tag);
    }
  };
  const handleClear = e => {
    e.preventDefault();
    setSearch('');
    setSearched('');
    clearCaptionsUnderTag();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} type='text' />
        <select onChange={handleSelect}>
          <option value='alltags'>All tags</option>
          <option value='fish'>fish</option>
          <option value='health'>health</option>
          <option value='lion'>lion</option>
        </select>
        <button type='submit'>Search</button>
      </form>
      <button onClick={handleClear}>Reset</button>

      <CardContainer
        captionsUnderTag={props.captionsUnderTag}
        captions={props.captions}
        searched={searched}
        search={search}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    captionsUnderTag: state.capCard.captionsUnderTag,
    captions: state.capCard.captions
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCaptionsUnderTag: tag => dispatch(getCaptionsUnderTag(tag)),
    clearCaptionsUnderTag: () => dispatch(clearCaptionsUnderTag())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
