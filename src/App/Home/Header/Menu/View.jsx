import React from 'react';

import Item from './Item';
import './styles.css';

const MenuView = () => {
	return (
		<div className="header-menu">
			<ul className="header-main-menu">
				<Item />
				<Item fullWidth />
			</ul>
		</div>
	)
};

export default MenuView;