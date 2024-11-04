const topicReducer = (state = { data: []}, action) => {
  switch (action.type) {
    case "FETCH_TOPIC_SUCCESS":
      return {
        ...state,
        data: action.payload
      }
    case "DELETE_TOPIC":
      return {
        ...state,
        data: state.data.filter(topic => topic.id !== action.id)
      };
    case "CREATE_TOPIC":
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    case  "EDIT_TOPIC":
      const newState = state.data.map(topic => topic.id === action.payload.id ? { ...topic, ...action.payload.data } : topic);
      return {
        ...state,
        data: newState
      }
    default:
      return state;
  }
}

export default topicReducer;