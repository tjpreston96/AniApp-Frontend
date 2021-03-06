import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/media`;

async function getCollection(type, collection) {
  const res = await fetch(`${BASE_URL}/collection/${type}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection }),
  });

  return res.json();
}

async function search(type, title) {
  const res = await fetch(`${BASE_URL}/search/${type}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  return res.json();
}

async function add(type, id) {
  const res = await fetch(`${BASE_URL}/user/collection/${type}/add`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, id }),
  });

  return res.json();
}

async function remove(type, id) {
  const res = await fetch(`${BASE_URL}/user/collection/${type}/remove`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, id }),
  });
  return res.json();
}

async function currentUserCollection(type) {
  const res = await fetch(`${BASE_URL}/user/current-collection/${type}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

async function userCollection(type) {
  const res = await fetch(`${BASE_URL}/user/collection/${type}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export {
  getCollection,
  search,
  add,
  remove,
  currentUserCollection,
  userCollection,
};
