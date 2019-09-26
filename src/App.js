import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Loading } from './components/loading/loading.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
      loading: true
    };
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
     window.addEventListener('load', this.handleLoad);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users })
      );
       window.addEventListener('load', this.handleLoad);

  }
  handleLoad() {
    document.getElementsByClassName('lds-hourglass')[0].style.display='none';
    document.getElementsByClassName('card-list')[0].style.display='grid';
   }
  render() {

    const { users, searchField } = this.state;
    const filterUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    )


    return (
      <div className="App">
        <Loading id="loading"/>
        <SearchBox placeholder="Chào cậu, cậu tìm ai nào ?" handleChange={
          e => this.setState({ searchField: e.target.value })
        } />
        <CardList  users={filterUsers} />
      </div>
    );
  }
}

export default App;
