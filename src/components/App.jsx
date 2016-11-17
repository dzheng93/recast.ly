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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: exampleVideoData[2]
    };
  }

  onVideoListClick (video) {
    this.setState({
      currentSong: video
    });
  }


  render() {
    return (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={this.state.currentSong} />
    </div>
    <div className="col-md-5">
      <VideoList onVideoListClick={this.onVideoListClick.bind(this)} videos={exampleVideoData} />
    </div>
    </div>
    );
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
