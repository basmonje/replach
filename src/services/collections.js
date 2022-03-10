import { BASE_PATH, API_KEY } from '../utils/constants';

export const getCollections = async (page) => {
  const url = `${BASE_PATH}/collections/?per_page=18&page=${page}&client_id=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getCollectionPhotosById = async (id, page) => {
  const url = `${BASE_PATH}/collections/${id}/photos/?per_page=18&page=${page}&client_id=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getCollectionById = async (id) => {
  const url = `${BASE_PATH}/collections/${id}/?client_id=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const searchCollections = async (query, page) => {
  const url = `${BASE_PATH}/search/collections?query=${query}&page=${page}&per_page=18&client_id=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
