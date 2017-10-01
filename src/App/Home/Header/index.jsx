import React from 'react';

import View from './View';

class Header extends React.Component {
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
			if (window.scrollY > 42) {
				this.node.style.position = 'fixed';
				this.node.style.top = '0';
			} else {
				this.node.style.position = 'inherit';
			}
		})
	}
	
	render() {
		return (
			<View setNode={this.setNode} />
		);
	}
}

export default Header;