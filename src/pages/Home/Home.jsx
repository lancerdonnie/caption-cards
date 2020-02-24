import React, { useState, useEffect } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import {
  getCaptions,
  getTags,
  getCaptionsUnderTag,
  getCaptionsWithManyTags
} from '../../redux/actions/capCardActions';
import AddCaptionWithTag from '../../components/AddCaptionWithTag/AddCaptionWithTag';
import Search from '../../components/Search/Search';
import CardContainer from '../../components/CardContainer/CardContainer';

const Home = props => {
  const {
    getCaptions,
    getTags,
    getCaptionsUnderTag,
    getCaptionsWithManyTags
  } = props;
  useEffect(() => {
    // getCaptions();
    // getTags();
    // getCaptionsUnderTag(5);
    // getCaptionsWithManyTags();
  }, []);
  const [searchEmpty, setSearchEmpty] = useState('');

  const searchInputChange = value => {
    setSearchEmpty(value);
  };

  return (
    <div>
      <h1>Caption Cards</h1>
      <Search search={searchInputChange} />
      {/* <AddCaptionWithTag /> */}
      {searchEmpty.length < 1 && <CardContainer />}
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    getCaptions: () => dispatch(getCaptions()),
    getTags: () => dispatch(getTags()),
    getCaptionsUnderTag: tagId => dispatch(getCaptionsUnderTag(tagId)),
    getCaptionsWithManyTags: () => dispatch(getCaptionsWithManyTags())
  };
};
export default connect(null, mapDispatchToProps)(Home);
