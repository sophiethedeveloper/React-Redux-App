import React, {useEffect, useState} from 'react';
import Starting from './components/Starting';
import { connect } from "react-redux";

import { fetchQuotes } from "./store/actions";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import SearchForm from './components/SearchForm';

function App(props) {

  const { fetchQuotes } = props;

  const [category, setCategory] = useState(
    "https://api.chucknorris.io/jokes/random?category=celebrity"
  );


  useEffect(() => {
    fetchQuotes(category)
  }, [fetchQuotes, category])

  return (
    <div className="App">
    <Starting />
    <SearchForm setCategory={setCategory} />
    {props.quotes.map((quote) => (
        <h1 key={quote.id}>{quote.value}</h1>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {fetchQuotes})(App);
