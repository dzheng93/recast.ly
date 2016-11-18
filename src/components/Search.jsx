// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" onChange={props.handleChange} value={props.searchText} />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

class Search extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInput(e) {
    this.props.handleSearch(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={this.handleInput.bind(this)} value={this.state.text} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
