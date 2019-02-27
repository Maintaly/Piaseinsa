import React, { Component } from 'react'
import words from '../../src/words.json'
import {Link} from 'react-router-dom'
import './SearchPage.css'
export default class SearchPage extends Component {

  makeSuggestions() {
    let wordlist = Object.keys(words)
    let inputVal = this.props.filter || ""
    let suggestions = []
    wordlist.forEach(word => {
      if(word.substring(0, inputVal.length) === inputVal) suggestions.push(word)
    })
    return suggestions.map(s => <li className="suggestion"><Link to={`/words/${s}`}><p>{s}: info sulla parola</p></Link></li>)
  }

  render() {
    return (
      <div className="SearchPage">
        <div id="suggestions-div" className="suggestionList">
          {this.makeSuggestions()}
        </div>
      </div>
    )
  }
}