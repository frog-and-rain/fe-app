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
		let currentScrollY = 0;
		window.addEventListener('scroll', () => {
			// show menu when scroll up
			if (window.scrollY > 42 && currentScrollY > window.scrollY) {
				// this.node.classList.remove('header-animation-up');
				// if (this.node.className.indexOf('header-animation-down') === -1) {
				// 	this.node.className += ' header-animation-down';
				// }
				// this.node.style.position = 'fixed';
				// this.node.style.top = 0;
			}
			
			// hide menu when scroll down
			if (window.scrollY > 42 && currentScrollY < window.scrollY) {
				// this.node.classList.remove('header-animation-down');
				// if (this.node.className.indexOf('header-animation-up') === -1) {
				// 	this.node.className += ' header-animation-up';
				// }
				// this.node.style.position = 'fixed';
				// this.node.style.top = 0;
			}
			
			if (window.scrollY <= 42) {
				this.node.style.position = 'inherit';
				// this.node.classList.remove('header-animation-down');
			}
			currentScrollY = window.scrollY;
		})
	}
	
	render() {
		return (
			<View setNode={this.setNode} />
		);
	}
}

export default Header;