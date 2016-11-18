var searchYouTube = (options, callback) => {
  // console.log('what is wrong with our key?', options.key);
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key, 
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: function (data) {
      console.log('successful query data:', data);
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('searchYoutube Query Failed', data);
    }
  });
};  

window.searchYouTube = searchYouTube;






