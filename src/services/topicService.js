import { del, get, patch, post } from "../utils/request"

export const getListTopicService = async () => {
  const result = await get(`topic`);
  return result;
}

export const deleteTopicService = async (id) => {
  const result = await del(`topic/${id}`);
  return result;
}

export const createTopicService = async (options) => {
  const result = await post(`topic`, options);
  return result;
}

export const editTopicService = async (id, options) => {
  const result = await patch(`topic/${id}`, options);
  return result;
}