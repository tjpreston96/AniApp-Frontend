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
  const res = await fetch(`${BASE_URL}/collection/${type}/add`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, id }),
  });

  return res.json();
}

export { getCollection, search, add };
