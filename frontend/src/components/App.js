import React, { Component } from "react";
import Header from "./Header";
import store from "../store";
import { Provider } from "react-redux";
import BooksList from "./BooksList";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <br />
          <br />
          <BooksList />
        </div>
      </Provider>
    );
  }
}

export default App;
