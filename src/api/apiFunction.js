import axios from "axios";

const API_HOST = "https://guestbook.jmoomin.com";

// ownerId에 해당하는 방명록을 가져옴
export const getArticleByOwnerId = (ownerId) => {
  return axios.get(`${API_HOST}/${ownerId}/articles`);
};

// id에 해당하는 방명록을 가져옴
export const getArticleById = (id) => {
  return axios.get(`${API_HOST}/articles/${id}`);
};

// 방명록 등록
export const createArticle = (id, title, body) => {
  return axios.post(`${API_HOST}/${id}/articles`, {
    title,
    body,
  });
};

// 방명록 업데이트
export const updateArticle = (id, title, body) => {
  return axios.put(`${API_HOST}/articles/${id}`, {
    title,
    body,
  });
};

// 방명록삭제
export const deleteArticle = (id) => {
  return axios.delete(`${API_HOST}/articles/${id}`);
};