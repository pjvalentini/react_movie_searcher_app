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
      movie: undefined
    };
  }
  searchMovies(e) {
    e.preventDefault();

    let movie = this.refs.movieSearch.value.split(" ").join("+").toLowerCase();
    console.log(movie);

    let api_key = ""
  }
  render() {
      console.log(this.state.movie)
  }
}
