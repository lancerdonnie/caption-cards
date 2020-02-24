import axios from 'axios';

export const getCaptions = () => async dispatch => {
  const res = (
    await axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')
  ).data;
  //check status
  const captions = res.data.captions;
  dispatch({ type: 'GET_CAPTIONS', payload: captions });
};

export const getTags = () => async dispatch => {
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
  dispatch({ type: 'GET_TAGS', payload: tags });
};

export const getCaptionsUnderTag = tagId => async dispatch => {
  const res = (
    await axios.get(
      `https://capcards-api.herokuapp.com/v1.0/api/caption/withTag?tagId=${tagId}`
    )
  ).data;
  const captionsUnderTag = res.data;
  dispatch({ type: 'GET_CAPTIONS_UNDER_TAG', payload: captionsUnderTag });
};

export const getCaptionsWithManyTags = () => async dispatch => {
  const res = (
    await axios.post('https://capcards-api.herokuapp.com/v1.0/api/tag/array', {
      tags: ['food', 'fish', 'health']
    })
  ).data;
  const captionsWithManyTags = res.data.captions;
  dispatch({
    type: 'GET_CAPTIONS_WITH_MANY_TAGS',
    payload: captionsWithManyTags
  });
};

export const saveCaption = caption => async dispatch => {
  const res = await axios.post(
    'https://capcards-api.herokuapp.com/v1.0/api/caption/',
    {
      caption
    }
  );
  // "status": "success",
  //   "data": {
  //       "id": 12,
  //       "caption": "i love jogging daily to keep fit",
  //       "updatedAt": "2020-02-24T16:49:19.627Z",
  //       "createdAt": "2020-02-24T16:49:19.627Z"
  // }
  getCaptions();
};
export const saveTag = tag => async dispatch => {
  //tag will save twice
  const res = await axios.post(
    'https://capcards-api.herokuapp.com/v1.0/api/tag/',
    {
      tag
    }
  );
  getTags();
};

export const addTagToCaption = (captionId, tagId) => async dispatch => {
  const res = await axios.post(
    'https://capcards-api.herokuapp.com/v1.0/api/caption/add-tag',
    {
      tagId,
      captionId
    }
  );
};

export const createCaptionWithTags = (caption, tags) => async dispatch => {
  const res = await axios.post(
    'https://capcards-api.herokuapp.com/v1.0/api/caption/multi',
    {
      caption,
      tags
    }
  );
};
