const BASE_URL = `https://candidate-test.herokuapp.com`;

export default class API {
  static fetchContacts() {
    return fetch(`${BASE_URL}/contacts`).then(res => res.json());
  }
}
