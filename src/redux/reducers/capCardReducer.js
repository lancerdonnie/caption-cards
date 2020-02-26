import {
  LOADING,
  ADDING,
  GET_TAGS,
  GET_CAPTIONS,
  GET_CAPTIONS_WITH_MANY_TAGS,
  GET_CAPTIONS_UNDER_TAG
} from '../types';

const initialState = {
  captions: [],
  tags: [],
  captionsUnderTag: null,
  captionsWithManyTags: [],
  loading: false,
  adding: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAPTIONS:
      return { ...state, captions: action.payload };
    case GET_TAGS:
      return { ...state, tags: action.payload };
    case GET_CAPTIONS_UNDER_TAG:
      return { ...state, captionsUnderTag: action.payload };
    case GET_CAPTIONS_WITH_MANY_TAGS:
      return { ...state, captionsWithManyTags: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case ADDING:
      return { ...state, adding: action.payload };
    default:
      return state;
  }
};
