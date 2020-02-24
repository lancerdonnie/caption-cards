import React, { useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import { connect } from 'react-redux';
import { getCaptionsUnderTag } from '../../redux/actions/capCardActions';

const Search = props => {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');
  const handleChange = e => {
    setSearch(e.target.value);
    props.search(e.target.value);
    if (e.length > 0) props.getCaptionsUnderTag(e.target.value);
    //run search algo
  };
  const handleSelect = e => {
    setTag(e.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} value={search} type='text' />
      <select onChange={handleSelect}>
        <option value='alltags'>All tags</option>
        <option value='fish'>fish</option>
        <option value='snaol'>snaol</option>
        <option value='lion'>lion</option>
      </select>
      {search !== '' && <CardContainer />}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getCaptionsUnderTag: tagId => dispatch(getCaptionsUnderTag(tagId))
  };
};
export default connect(null, mapDispatchToProps)(Search);
