// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

//fetch does not work for api calls in react
//axios does
//https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined
    };
  }
  searchMovies(e) {
    e.preventDefault();

    let movie = this.refs.movieSearcher.value.split(" ").join("+").toLowerCase();
    console.log(movie);

    let api_key = '1a18ddb3'
    let api_url = `http://www.omdbapi.com/?apikey=${api_key}&t=toy+story`

    axios.get(api_url, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      console.log(results)
      this.setState({
        title: results.data
      })
      console.log(results.data)
      this.refs.movieSearcher.value = "";
    });
  }
  // to see your data before render...you need to wrap your request in a componentWillMount() function.
  componentWillMount(){
    let api_key = '1a18ddb3'
    // let api_url = `http://www.omdbapi.com/?apikey=${api_key}&t=${movie}`
    let api_url = `http://www.omdbapi.com/?apikey=${api_key}&t=top+gun`

    axios.get(api_url, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      console.log(results)
      this.setState({
        title: results.data
      })
      console.log(results.data)
      this.refs.movieSearcher.value = "";
    });
  }
  render() {
      console.log(this.state.title)
      const displayMovieSearch = () => {
      }
      return (
        <div>
          <h1>React Movie Searcher</h1>
        </div>
      )
   }
}
