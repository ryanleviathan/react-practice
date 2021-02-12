import React, { Component } from 'react';
import { getCharacters } from '../services/rickAndMortyApi';
import Detail from './Detail';

export default class DetailPage extends Component {
  state = {
    character: []
  }

  componentDidMount() {
    getCharacters(this.props.match.params.id);
  }

  render() {
    const { character } = this.state;

    return (
      <Detail character={character} />
    );
  }
}
