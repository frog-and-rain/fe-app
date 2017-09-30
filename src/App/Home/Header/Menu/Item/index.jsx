import React from 'react';
import T from 'prop-types';

import MenuItemView from './View';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.node = null;
		this.state = {
			title: 'Home',
			options: [
				{ text: 'item 1', link: '#' },
				{ text: 'item 2', link: '#' },
				{ text: 'item 3', link: '#' },
				{ text: 'item 4', link: '#' },
			],
		};
		
		this.setNode = this.setNode.bind(this);
	}
	
	setNode(node) {
		this.node = node;
	}
	
	componentDidMount() {
	}
	
	render() {
		return (
			<MenuItemView {...this.state} setNode={this.setNode} {...this.props} />
		);
	}
}

MenuItem.propTypes = {
	fullWidth: T.bool,
};

export default MenuItem;