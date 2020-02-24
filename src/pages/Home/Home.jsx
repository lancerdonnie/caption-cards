import React, { useState, useEffect } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import {
  getCaptions,
  getTags,
  getCaptionsUnderTag,
  getCaptionsWithManyTags
} from '../../redux/actions/capCardActions';
import AddCaptionWithTag from '../../components/AddCaptionWithTag/AddCaptionWithTag';

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

  return (
    <div>
      <h1>Caption Cards</h1>
      <AddCaptionWithTag />
      {/* <div className='cardcontainer'>{Array(20).fill(<Card />)}</div> */}
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
