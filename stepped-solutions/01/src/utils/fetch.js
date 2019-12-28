export default async function(endpoint) {
  return fetch(endpoint)
    .then(response => response.json())
    .catch(error => error);
}
