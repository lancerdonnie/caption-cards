import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { connect } from 'react-redux';
import CardContainer from '../../components/CardContainer/CardContainer';
import { getCaptionsWithManyTags } from '../../redux/actions/capCardActions';
import AddCaptionWithTag from '../../components/AddCaptionWithTag/AddCaptionWithTag';
import Button from '../../components/Button/Button';

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
    const isTag = tags.find(tag => {
      return tag.id === id;
    });
    if (isTag) {
      setTags(newData);
      const getTags = [];
      tags.forEach(tag => {
        if (tag.id !== id) getTags.push(tag.tag);
      });
      props.getCaptionsWithManyTags([...getTags]);
    } else {
      const findTag = props.tags.find(tag => {
        return tag.id === id;
      });
      setTags([...newData, findTag]);
      const getTags = [];
      [...newData, findTag].forEach(tag => {
        getTags.push(tag.tag);
      });
      props.getCaptionsWithManyTags([...getTags]);
    }
  };
  const handleSearch = e => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className='head'>
        <h1>Caption Cards</h1>
      </div>
      {/* <Link to='/cbt'>Filter Caption</Link> */}
      <div className='bar'>
        <input
          onChange={handleSearch}
          value={search}
          type='text'
          placeholder='Search'
        />
        <AddCaptionWithTag />
      </div>

      <div className='buttons'>
        {props.tags.map(tag => {
          return (
            <div key={tag.id} onClick={() => handleClick(tag.id)}>
              <Button data={tag.tag} />
            </div>
          );
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
