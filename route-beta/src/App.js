import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// import Header from './Header';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('/api/moves')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <NavBar />
        <div className="App-body">
          <List items={this.state.items} />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
