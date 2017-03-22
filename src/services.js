const baseUrl = 'http://localhost:8080/universities';

export const loadUniversities = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .catch(error => { throw error });
};
