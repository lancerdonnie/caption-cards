import axios from 'axios';
import Toast from '../../Utils/Toast';
import {
  LOADING,
  ADDING,
  GET_TAGS,
  GET_CAPTIONS,
  GET_CAPTIONS_WITH_MANY_TAGS,
  GET_CAPTIONS_UNDER_TAG
} from '../types';

export const getCaptions = () => async dispatch => {
  try {
    dispatch({ type: LOADING, payload: true });
    const res = (
      await axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
    ).data;
    //check status
    const captions = res.data.captions;
    dispatch({ type: GET_CAPTIONS, payload: captions });
  } catch (error) {
    console.log(error);
    Toast('Problem loading captions');
  }

  dispatch({ type: LOADING, payload: false });
};

export const getTags = () => async dispatch => {
  try {
    const res = (
      await axios.get('https://capcards-api.herokuapp.com/v1.0/api/tag/')
    ).data;
    const temp_tags = res.data.tags;
    //add tag ids to tags. tag ids are sequential but not provided by api
    const tags = temp_tags.map((tag, index) => {
      return {
        id: index + 1,
        tag
      };
    });
    dispatch({ type: GET_TAGS, payload: tags });
  } catch (error) {
    console.log(error);
    Toast('Problem loading tags');
  }
};

export const getCaptionsUnderTag = tagName => async (dispatch, getStore) => {
  const tagId = getStore().capCard.tags.find(tag => {
    return tag.tag === tagName;
  });

  try {
    dispatch({ type: LOADING, payload: true });
    const res = (
      await axios.get(
        `https://capcards-api.herokuapp.com/v1.0/api/caption/withTag?tagId=${tagId.id}`
      )
    ).data;
    const captionsUnderTag = res.data;
    dispatch({ type: GET_CAPTIONS_UNDER_TAG, payload: captionsUnderTag });
  } catch (error) {
    console.log(error);
    Toast('Problem loading captions');
  }

  dispatch({ type: LOADING, payload: false });
};

export const getCaptionsWithManyTags = tags => async dispatch => {
  try {
    const res = (
      await axios.post(
        'https://capcards-api.herokuapp.com/v1.0/api/tag/array',
        {
          tags
        }
      )
    ).data;
    const captionsWithManyTags = res.data.captions;
    dispatch({
      type: GET_CAPTIONS_WITH_MANY_TAGS,
      payload: captionsWithManyTags
    });
  } catch (error) {
    console.log(error);
    Toast('Problem loading captions under tags');
  }
};

export const saveCaption = caption => async dispatch => {
  try {
    dispatch({ type: ADDING, payload: true });
    await axios.post('https://capcards-api.herokuapp.com/v1.0/api/caption/', {
      caption
    });
    Toast('Added caption');
    getCaptions();
  } catch (error) {
    console.log(error);
    Toast('Error adding caption');
  }
  dispatch({ type: ADDING, payload: false });
};

export const saveTag = tag => async dispatch => {
  try {
    dispatch({ type: ADDING, payload: true });
    await axios.post('https://capcards-api.herokuapp.com/v1.0/api/tag/', {
      tag
    });
    Toast('Added tag');
    getTags();
  } catch (error) {
    console.log(error);
    Toast('Error adding tag');
  }
  dispatch({ type: ADDING, payload: false });
};

export const addTagToCaption = (captionId, tagId) => async dispatch => {
  try {
    dispatch({ type: ADDING, payload: true });
    await axios.post(
      'https://capcards-api.herokuapp.com/v1.0/api/caption/add-tag',
      {
        tagId,
        captionId
      }
    );
    Toast('Added caption to tag');
  } catch (error) {
    console.log(error);
    Toast('Error linking caption to tag');
  }

  dispatch({ type: ADDING, payload: false });
};

export const createCaptionWithTags = (caption, tags) => async dispatch => {
  try {
    dispatch({ type: ADDING, payload: true });
    await axios.post(
      'https://capcards-api.herokuapp.com/v1.0/api/caption/multi',
      {
        caption,
        tags
      }
    );
    Toast('Added caption with tags');
    getCaptions();
    getTags();
  } catch (error) {
    console.log(error);
    Toast('Error adding caption with tags');
  }
  
  dispatch({ type: ADDING, payload: false });
};
