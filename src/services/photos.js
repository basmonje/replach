import { BASE_PATH, API_KEY } from '../utils/constants';

const fetching = async (url) => {
  const res = await window.fetch(url);
  const data = await res.json();
  return data;
};

export const getPhotos = async (count = 30) => {
  const url = `${BASE_PATH}/photos/random?count=${count}&client_id=${API_KEY}`;
  const data = await fetching(url);
  return data;
};

export const searchPhotos = async (query, page = 1) => {
  const url = `${BASE_PATH}/search/photos?query=${query}&page=${page}&per_page=18&client_id=${API_KEY}`;
  const data = await fetching(url);
  return data;
};

export const getPhotoById = async (id) => {
  const url = `${BASE_PATH}/photos/${id}?client_id=${API_KEY}`;
  const data = await fetching(url);
  return data;
};

export const getTopics = async () => {
  const url = `${BASE_PATH}/topics?client_id=${API_KEY}`;
  const res = await window.fetch(url);
  const data = await res.json();
  return data;
};
