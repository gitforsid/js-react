import {Component} from 'react';

import './search-box.stules.css'

class SearchBox extends Component {
  render(){
    return (
      <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder={this.props.plasecholder}
        onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox;


// components/search-bar/search-bax.component.jsx
