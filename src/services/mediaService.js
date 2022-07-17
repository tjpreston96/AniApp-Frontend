import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/media`;

async function getCollection(type, collection) {
  const res = await fetch(`${BASE_URL}/collection/${type}/${collection}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export { getCollection };
