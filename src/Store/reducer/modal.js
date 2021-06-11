import {MODAL_DATA_EDITOR} from "./../action/actions";

const initialState = {
  bannerModal: null
};

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case MODAL_DATA_EDITOR:
        return payload;
    default:
  }
  return state;
};

export default reducer;
