import React, { Component } from 'react';
import './App.css';

import Container from './components/Container'
import CharacterList from './components/CharacterList';
import SearchFilter from './components/SearchFiter';
import Pagination from './components/Pagination';

import Characters from './components/Character'

class App extends Component {

  constructor() {
    super()
    this.state = {
      characters: [],
      loading: true,
      searchFilter: '',
      page: ''
    }
  }

  // componentDidMount() {
  //   fetch('https://rickandmortyapi.com/api/charac  ')
  //     .then(response => response.json())
  //     .then(users => this.setState({ characters: users.results, loading: false }, () => console.log(this.state.characters)));
  // }


  searchChange = (e) => {
    this.setState({ searchFilter: e.target.value }, () => console.log(this.state.searchFilter))
  }

  pageChange = (num) => {
    this.setState({page: num}, ()=> console.log(this.state.page))
  }

  render() {
    
    return (
      <Container>
      <h1>Rick and Morty API</h1>
        <SearchFilter onChange={this.searchChange} />
        <Pagination pageChange={this.pageChange}/>
        <CharacterList>
          <Characters searchFilter={this.state.searchFilter}/>
        </CharacterList>
      </Container>
    )
  }
}

export default App;
