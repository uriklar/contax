const BASE_URL = `https://candidate-test.herokuapp.com`;

export function fetchContacts() {
  return fetch(`${BASE_URL}/contacts`).then(res => res.json());
}
