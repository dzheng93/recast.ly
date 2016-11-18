// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

// var searchRes = {
//   key: window.YOUTUBE_API_KEY,
//   q: 'Car crash complilation',
//   maxResults: '5',
//   part: 'snippet',
//   videoEmbeddable: 'true',
//   type: 'video'
// };

// var resultData = [];
// var importer = function(data) {
//   resultData.push(data);
// };

// searchYouTube(searchRes, importer);

// console.log(resultData);

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      currentVid: exampleVideoData[0],
      currentList: exampleVideoData,
      searchText: 'chatterbox'
    };

    this.options = {
      key: window.YOUTUBE_API_KEY,
      query: this.state.searchText,
      max: 8
    };

  }

  callback(videos) {
    this.setState({
      currentVid: videos[0],
      currentList: videos
    });
  }

  handleSearchQuery(query) {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 8
    }, this.callback.bind(this));
  }


  componentDidMount() {
    this.props.searchYouTube(this.options, this.callback.bind(this));
  }

  onVideoListClick (video) {
    this.setState({
      currentVid: video
    });
  }
  // console.log('this.state.curentvid', this.state.currentVid);
  render() {
    return (
  <div>
    <Nav handleSearch={this.handleSearchQuery.bind(this)} />
    <div className="col-md-7">
      <VideoPlayer video={this.state.currentVid} />
    </div>
    <div className="col-md-5">
      <VideoList onVideoListClick={this.onVideoListClick.bind(this)} videos={this.state.currentList} />
    </div>
    </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// window.App = App;