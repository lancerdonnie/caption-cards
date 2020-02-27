import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { connect } from 'react-redux';
import { getCaptionsWithManyTags } from '../../redux/actions/capCardActions';
import CardContainer from '../../components/CardContainer/CardContainer';
import AddCaptionWithTag from '../../components/AddCaptionWithTag/AddCaptionWithTag';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';

const Home = props => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(true);

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
    //filters tags to search for multiple tags
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

  const handleShowTags = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className='head'>
        <h1>Caption Cards</h1>
        <Link className='link' to='/filter'>
          Filter Caption
        </Link>
      </div>
      {props.loading ? (
        <Spinner />
      ) : (
        <div>
          <div className='blue'>
            <div className='bar'>
              <input
                onChange={handleSearch}
                value={search}
                type='text'
                placeholder='Search'
              />
              <AddCaptionWithTag />
            </div>
            <div className='showhide' onClick={handleShowTags}>
              {show ? 'hide tags' : 'show tags'}
            </div>
            <div className={`buttons ${show ? 'show' : 'hide'}`}>
              {props.tags.map(tag => {
                return (
                  <div key={tag.id} onClick={() => handleClick(tag.id)}>
                    <Button data={tag.tag} />
                  </div>
                );
              })}
            </div>
          </div>
          <CardContainer search={search} captions={data} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    captions: state.capCard.captions,
    tags: state.capCard.tags,
    captionsWithManyTags: state.capCard.captionsWithManyTags,
    loading: state.capCard.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCaptionsWithManyTags: tags => dispatch(getCaptionsWithManyTags(tags))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
