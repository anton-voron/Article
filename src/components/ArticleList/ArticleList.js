import React, {Component, PureComponent} from 'react'
import Article from '../Article.js'
import './style.css';

class ArticleList extends PureComponent {
	state = {
		openArticleId: null
	}

	handleClick = openArticleId => this.setState({
			openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
		})
	

	

	render() {
		const articleElements = this.props.articles.map((atricleItem, index, arr) =>
		<li key = {atricleItem.id} className="article-list_li">
			<Article article= {atricleItem} 
			isOpen = {this.state.openArticleId === atricleItem.id} 
			onButtonClick = {this.handleClick.bind(this, atricleItem.id)}
			/>
		</li>
		)
	return (
		<ul>
			{articleElements}
		</ul>
		)
	}
}

export default ArticleList