export const searchYouTube = ({ query, max, key }, callback) => {
  const getUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&type=video&key=${key}`;
  fetch(getUrl)
    .then(res => res.json())
    .then(json => callback(json));
};
