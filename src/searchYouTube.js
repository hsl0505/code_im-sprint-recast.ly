/* eslint-disable max-len */
export default function searchYouTube ({ query, max=5, key }, callback) {
  const getUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&type=video&key=${key}`;
  
  fetch(getUrl)
    .then(res => res.json())
    .then(json => {
      callback(json)});
}
