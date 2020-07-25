import React from "react";
// import ReactDOM from 'react-dom';
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.jsx";
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <List items={this.state.items}/>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
