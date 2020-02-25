import React, { useState, useEffect } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import { connect } from 'react-redux';
import {
  getCaptions,
  getTags,
  getCaptionsUnderTag,
  clearCaptionsUnderTag
} from '../../redux/actions/capCardActions';

const Search = props => {
  const {
    getCaptions,
    getTags,
    getCaptionsUnderTag,
    clearCaptionsUnderTag
  } = props;
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');
  const [data, setData] = useState([]);

  const handleChange = e => {
    setSearch(e.target.value);
    //run search algo
  };
  const handleSelect = e => {
    setTag(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (tag === 'alltags') {
      clearCaptionsUnderTag();
    } else {
      getCaptionsUnderTag(tag);
    }
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

      <CardContainer
        captionsUnderTag={props.captionsUnderTag}
        captions={props.captions}
        tag={tag}
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
    getCaptions: () => dispatch(getCaptions()),
    getTags: () => dispatch(getTags()),
    getCaptionsUnderTag: tag => dispatch(getCaptionsUnderTag(tag)),
    clearCaptionsUnderTag: () => dispatch(clearCaptionsUnderTag())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
