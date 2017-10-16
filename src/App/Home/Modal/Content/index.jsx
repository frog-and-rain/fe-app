import React from 'react';
import View from './View';

class ContentModal extends React.Component {
	constructor(props) {
		super(props);
		this.node = null;
		this.state = {
			width: 800,
			height: 600,
		};
		
		this.setNode = this.setNode.bind(this);
		this.removeRule = this.removeRule.bind(this);
	}
	
	setNode(node) {
		this.node = node;
	}
	
	removeRule(rule) {
		const ss = document.styleSheets;
		const index = [];
		let current = null;
		for (let i = 0; i < ss.length; i++) {
			for (let j = 0; j < ss[i].cssRules.length; j++) {
				if (ss[i].cssRules[j].type === window.CSSRule.KEYFRAMES_RULE
				&& ss[i].cssRules[j].name === rule) {
					index.push(j);
					current = i;
				}
			}
		}
		
		for (let i = 0; i < index.length; i++) {
			ss[current].deleteRule(index[i] - i);
		}
		
		return ss[current];
	}
	
	componentDidMount() {}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			const { current } = this.props;
			const styleSheet = this.removeRule('modalShow');
			const currentRect = this.node.getBoundingClientRect();
			const xCenter = window.innerWidth/2 - currentRect.width/2;
			const yCenter = window.innerHeight/2 - currentRect.height/2;
			
			const rule = `@keyframes modalShow {
				from {
					width: ${current ? current.getBoundingClientRect().width : 0}px;
					height: ${current ? current.getBoundingClientRect().height : 0}px;
					transform: translate(${current ? current.getBoundingClientRect().left : 0}px,
					 ${current ? current.getBoundingClientRect().top : 0}px);
				}
				to {
					width: ${this.state.width}px;
					height: ${this.state.height}px;
					transform: translate(${xCenter}px, ${yCenter}px);
				}
			}`;
			const rule2 = `@-webkit-keyframes modalShow {
				from {
					width: ${current ? current.getBoundingClientRect().width : 0}px;
					height: ${current ? current.getBoundingClientRect().height : 0}px;
					transform: translate(${current ? current.getBoundingClientRect().left : 0}px,
					 ${current ? current.getBoundingClientRect().top : 0}px);
				}
				to {
					width: ${this.state.width}px;
					height: ${this.state.height}px;
					transform: translate(${xCenter}px, ${yCenter}px);
				}
			}`;
			styleSheet.insertRule(rule, 0);
			styleSheet.insertRule(rule2, 0);
			this.node.style.transform = `translate(${xCenter}px, ${yCenter}px)`;
		}
	}
	
	render() {
		return (
			<View setNode={this.setNode} children={this.props.children} {...this.state} />
		)
	}
}

export default ContentModal;