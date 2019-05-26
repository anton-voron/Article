import React, {PureComponent} from 'react';
import ArticleList from './ArticleList/ArticleList.js';
import articles from '../fixtures.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends PureComponent {
	/*constructor (props) {
		super(props); //Вызываем родительский конструктор и вызываем свойства(props)*/
		state = {
			reverted: false
		}
	 
	revert = () => {
		this.setState({reverted: !this.state.reverted})
	}

	render () {
		return (
			<div className="container">
			<header className="jumbotron">
				<h1> App name</h1>
				<button className="btn btn-primary" onClick ={this.revert}> Revert </button>
			</header>
				<ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles} />
				/* Никогда нальзя делать изменения для компонента по ссылки (из внешней переменно) 
				 никогда не менять то, что приходит нам в props,
				 поэтому копируем его 
				 и дальше изменяем порядок */
			</div>
		)
	}
}

export default App