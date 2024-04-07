export const supabaseCreate = (path, formData, navigate) => {
  fetch(`http://localhost:3002/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error))
    .finally(navigate);
};

export const supabaseGet = (p_id) => {
  const url = new URL('http://localhost:3002/projects/get');
  url.searchParams.append('id', p_id);
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data; // This should be the actual project data
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const supabaseUpdate = (formData, navigate) => {
  fetch('http://localhost:3002/projects/modify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error('슈파베이스', error))
    .finally(navigate);
};
