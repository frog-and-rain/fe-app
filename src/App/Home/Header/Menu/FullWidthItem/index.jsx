import React from 'react';

import MenuFullWidthItemView from './View';

class MenuFullWidthItem extends React.Component {
	constructor(props) {
		super(props);
		this.node = null;
		this.state = {
			title: 'Full',
			options: [
				{ text: 'item 1', link: '#' },
				{ text: 'item 2', link: '#' },
				{ text: 'item 3', link: '#' },
				{ text: 'item 4', link: '#' },
			]
		};
		
		this.setNode = this.setNode.bind(this);
	}
	
	setNode(node) {
		this.node = node;
	}
	
	componentDidMount() {
		this.node.addEventListener('mouseover', () => {
			const headerBottomContent = document.getElementsByClassName('header-bottom')[0];
			headerBottomContent.style.display = 'flex';
		});
		
		this.node.addEventListener('mouseout', () => {
			const headerBottomContent = document.getElementsByClassName('header-bottom')[0];
			headerBottomContent.style.display = 'none';
		})
	}
	
	render() {
		return (
			<MenuFullWidthItemView {...this.state} setNode={this.setNode} />
		);
	}
}

export default MenuFullWidthItem;