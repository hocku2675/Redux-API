export const getUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json());

export const getAlbums = () =>
  fetch("https://jsonplaceholder.typicode.com/albums").then((r) => r.json());

export const getPhotos = () =>
  fetch(`https://jsonplaceholder.typicode.com/photos`).then((r) => r.json());
