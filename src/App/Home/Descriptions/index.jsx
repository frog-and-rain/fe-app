import React from 'react';

import View from './View';

class Descriptions extends React.Component {
	constructor(props) {
		super(props);
		this.node = null;
		
		this.setNode = this.setNode.bind(this);
	}
	
	setNode(node) {
		this.node = node;
	}
	
	componentDidMount() {
		window.addEventListener('scroll', () => {
			if (this.node.getBoundingClientRect().top < window.innerHeight) {
				if (this.node.className.indexOf('description-content-right-animation') === -1) {
					this.node.className += ' description-content-right-animation'
				}
			}
		});
	}
	
	render() {
		return (
			<View setNode={this.setNode} />
		);
	}
}

export default Descriptions;