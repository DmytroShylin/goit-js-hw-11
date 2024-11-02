const API_KEY = '46842310-1eff6901abe3b896058131b9e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await fetch(`${BASE_URL}?${searchParams}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
