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
    let api_url = `http://www.omdbapi.com/?apikey=${api_key}&t=${movie}`

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
  // to see your data before render...you need to wrap your request in a componentWillMount() function
  componentWillMount() {

    let api_key = '1a18ddb3'
    // let api_url = `http://www.omdbapi.com/?apikey=${api_key}&t=${movie}`
    let api_url = `http://www.omdbapi.com/?apikey=${api_key}&t`

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
      this.refs.movieSearcher.value = "";
    });
  }

  render() {
      console.log(this.state.title)
      const displayMovieSearch = () => {
        if(this.state.title) {
          return (
            <div>
              <img className="movie-poster" src={this.state.title.Poster}/>
              <div className="movie-title">Title: {this.state.title.Title}</div>
              <div className="movie-genre">Genre: {this.state.title.Genre}</div>
              <div className="movie-year">Year: {this.state.title.Year}</div>
              <div className="movie-plot">Plot: {this.state.title.Plot}</div>
              <div className="movie-director">Director: {this.state.title.Director}</div>
              <div className="movie-actors">Actors: {this.state.title.Actors}</div>
              <div className="movie-awards">Awards: {this.state.title.Awards}</div>
              <div className="movie-rated">Rated: {this.state.title.Rated}</div>
            </div>
          )
        }
      }
      return (
        <div style={{width: '15%'}}>
          <h3 className="text-center">React Movie Searcher</h3>
          <form onSubmit={this.searchMovies.bind(this)}>
            <input type="text" ref="movieSearcher" placeholder="Type A Movie Title Here"/>
            <input type="submit"/>
          </form>
          <br></br>
          {displayMovieSearch()}
        </div>
      )
   }
}
