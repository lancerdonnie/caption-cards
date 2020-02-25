import React, { useEffect } from 'react';
import './CaptionsByTag.css';
import { connect } from 'react-redux';
import { getCaptionsUnderTag } from '../../redux/actions/capCardActions';
const CaptionsByTag = props => {
  return (
    <div className='captionsbytag'>
      <div>
        {props.tags.map(tag => {
          return (
            <p
              onClick={() => {
                props.getCaptionsUnderTag(tag.tag);
              }}
            >
              {tag.tag}
            </p>
          );
        })}
      </div>
      <div>
        {props.captionsUnderTag &&
          props.captionsUnderTag.captions.map(caption => {
            return <div>{caption}</div>;
          })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    captionsUnderTag: state.capCard.captionsUnderTag,
    tags: state.capCard.tags
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCaptionsUnderTag: tag => dispatch(getCaptionsUnderTag(tag))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CaptionsByTag);
