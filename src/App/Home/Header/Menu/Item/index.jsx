import React from 'react';

import MenuItemView from './View';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Home',
			options: [
				{ text: 'item 1', link: '#' },
				{ text: 'item 2', link: '#' },
				{ text: 'item 3', link: '#' },
				{ text: 'item 4', link: '#' },
			]
		}
	}
	
	render() {
		return (
			<MenuItemView {...this.state} />
		);
	}
}

export default MenuItem;