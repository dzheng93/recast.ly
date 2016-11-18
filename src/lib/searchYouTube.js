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
      // ReactDOM.render(<App />, document.getElementById('app'));
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('searchYoutube Query Failed', data);
    }
  });
};  

window.searchYouTube = searchYouTube;


// window.searchRes = {
//   key: window.YOUTUBE_API_KEY,
//   q: 'bike',
//   type: 'video',
//   videoEmbeddable: 'true',
//   maxResults: 8,
//   part: 'snippet',
// };

// window.resultData = [];
// window.importer = function(data) {
//   window.resultData = data;
// console.log('resultdata is', resultData);
// };


// searchYouTube(searchRes, importer);






