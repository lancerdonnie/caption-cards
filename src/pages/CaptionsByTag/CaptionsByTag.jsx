import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CaptionsByTag.css';
import { connect } from 'react-redux';
import { getCaptionsUnderTag } from '../../redux/actions/capCardActions';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
const CaptionsByTag = props => {
  const [clicked, setClicked] = useState();
  const style = {
    color: '#ff5722'
  };
  return (
    <div className='captionsbytag'>
      <div>
        <p>
          <Link to='/'>All captions</Link>
        </p>
        {props.tags.map(tag => {
          return (
            <p
              style={tag.id === clicked ? style : null}
              onClick={() => {
                setClicked(tag.id);
                props.getCaptionsUnderTag(tag.tag);
              }}
            >
              {tag.tag}
            </p>
          );
        })}
      </div>
      {props.loading ? (
        <Spinner />
      ) : (
        <div>
          {props.captionsUnderTag &&
            props.captionsUnderTag.captions.map(caption => {
              return <Card caption={caption} />;
            })}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    captionsUnderTag: state.capCard.captionsUnderTag,
    tags: state.capCard.tags,
    loading: state.capCard.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCaptionsUnderTag: tag => dispatch(getCaptionsUnderTag(tag))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CaptionsByTag);