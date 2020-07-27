import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// import Header from './Header';
import List from './components/List';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // componentDidMount() {
  //   fetch('/api/moves')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({
  //         items: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('err', err);
  //     });
  // }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <Header /> */}
          <NavBar />
          <div className="App-body">
            <Container>
              <ItemModal />
              <List items={this.state.items} />
              <img src={logo} className="App-logo" alt="logo" />
            </Container>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
