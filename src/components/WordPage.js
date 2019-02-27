import React, {Component} from 'react'
import data from '../words.json'
import './WordPage.css'
export default class WordPage extends Component {
	render() {
		return(
			<div className="WordPage">
						<div>
						<div className="wordTitle">
							<h2>{this.props.match.params.word}</h2> <p>(Parte del Discorso etc):</p>
						</div>
						<div className="wordInfo">
							<ul className="definitions">
								<li>{data[this.props.match.params.word]}</li>
								<li>Altre</li>
								<li>Definzioni</li>
							</ul>
							<i><p>Frasi esempio, particolarità, etc</p>
							<p>Anim consequat magna laboris elit dolore. Elit laboris exercitation eiusmod ex sint enim enim duis. Ea adipisicing laborum quis voluptate est excepteur.</p></i>
						</div>
						<div className="synonyms">
							<h3>Sinonimi:</h3>
							<ul>
								<li className="suggestion" style={{margin: "0 0 20px 0"}}><p>Sinonimo 1</p></li>
								<li className="suggestion" style={{margin: "0 0 20px 0"}}><p>Sinonimo 2</p></li>
								<li className="suggestion" style={{margin: "0 0 20px 0"}}><p>Sinonimo 3</p></li>
							</ul>
						</div>
					</div>
			</div>
		)
	}
}