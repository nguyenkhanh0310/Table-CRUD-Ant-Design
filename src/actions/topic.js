export const deleteTopic = (id) => {
  return {
    type: "DELETE_TOPIC",
    id: id
  }
}

export const fetchTopicSuccess = (data) => {
  return {
    type: 'FETCH_TOPIC_SUCCESS',
    payload: data
  }
}

export const createTopic = (data) => {
  return {
    type: "CREATE_TOPIC",
    payload: data
  }
}

export const editTopic = (id, data) => {
  return {
    type: "EDIT_TOPIC",
    payload: {id, data}
  }
}