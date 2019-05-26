import React, {Component, PureComponent} from 'react';


class Article extends PureComponent {
	constructor (props) {
		super(props); //Вызываем родительский конструктор и вызываем свойства(props)
		this.state = {
		/*	isOpen: props.defaultOpen, /* делаем, чтобы была открыта толкьо первая статья */
			count: 0
		}
	} 
/*//Вносит изменения в Vertual DOM, только заданым props,
// которые возвращают true,чтобы сократить количество изменений в DOM
Можно использовать PureComponent, чтобы поверхностно сравнивать все props  и все component
Таким образом работают все клики по тайтлам,но при реверт отрабатывают только 2 последних статьи,
Им злоупотреблять нельзя
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.isOpen !== nextState.isOpen
	}

*/
//Компонент жизненного цикла, должны реализовать его, чтобы реагировать на соответствующее событие
// Используется для получиния каки-то данных, нарпимер отправки запроса на сервер
	componentWillMount () {            
		console.log('---', "mounting")
	}
/*	componentWillReceiveProps(nextProps) {
		if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState ({
			isOpen: nextProps.defaultOpen
		})
	} */
	componentWillUpdate () {
		console.log('---', 'will update')
	}

	/*handleClick = () => {
		this.setState({isOpen: !this.state.isOpen}) // Отталкиваемся от предидушего состояния (чтобы не писать для каждого изменения на true/fasle) 
	}*/

	incrementCounter = () => {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		const {article, isOpen, onButtonClick} = this.props
		const style = {width: '50%'}
		console.log('---', this.props)
		const body = isOpen && <section className="card-text">{article.text}</section> // Если значение true, то  показывает текст, если фолс- не показывает
		return (
			<div className = "card mx-auto" style = {style}>
				<header className="card-header">
					<h2 onClick={this.incrementCounter}>
					{article.title}
					cliked {this.state.count}
					<button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
						{isOpen ? 'close' : 'open'}
					</button>
					</h2>	
				</header>
				<div className="card-body">
					<h6  className="card-subtitle text-muted">
					creation date: {(new Date(article.date)).toDateString()}
					</h6>
					{body}
				</div>
			</div>
		)
	}
}


export default Article