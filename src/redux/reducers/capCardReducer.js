const initialState = {
  captions: [],
  tags: [],
  captionsUnderTag: {},
  captionsWithManyTags: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CAPITONS':
      return { ...state, captions: action.payload };
    case 'GET_TAGS':
      return { ...state, tags: action.payload };
    case 'GET_CAPTIONS_UNDER_TAG':
      return { ...state, captionsUnderTag: action.payload };
    case 'GET_CAPTIONS_WITH_MANY_TAGS':
      return { ...state, captionsWithManyTags: action.payload };
    default:
      return state;
  }
};
