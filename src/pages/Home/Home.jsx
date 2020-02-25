import React, { useState, useEffect } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import AddCaptionWithTag from '../../components/AddCaptionWithTag/AddCaptionWithTag';
import Search from '../../components/Search/Search';
import CardContainer from '../../components/CardContainer/CardContainer';
import { getCaptionsWithManyTags } from '../../redux/actions/capCardActions';

const Home = props => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setData(props.captions);
    setTags(props.tags);
  }, [props.captions, props.tags]);
  useEffect(() => {
    if (props.captionsWithManyTags.length > 0) {
      setData(props.captionsWithManyTags);
    }
  }, [props.captionsWithManyTags]);
  const handleClick = id => {
    const newData = tags.filter(tag => {
      return tag.id !== id;
    });
    setTags(newData);
    const getTags = [];
    tags.forEach(tag => {
      if (tag.id !== id) getTags.push(tag.tag);
    });

    props.getCaptionsWithManyTags([...getTags]);
  };
  const handleSearch = e => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h1>Caption Cards</h1>
      <input onChange={handleSearch} value={search} type='text' />

      {/* <Search search={searchInputChange} /> */}
      {/* <AddCaptionWithTag /> */}
      {/* {searchEmpty && <CardContainer test />} */}
      <div>
        {tags.map(tag => {
          return <div onClick={() => handleClick(tag.id)}>{tag.tag}</div>;
        })}
      </div>
      <br />
      <CardContainer search={search} captions={data} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    captions: state.capCard.captions,
    tags: state.capCard.tags,
    captionsWithManyTags: state.capCard.captionsWithManyTags
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCaptionsWithManyTags: tags => dispatch(getCaptionsWithManyTags(tags))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
