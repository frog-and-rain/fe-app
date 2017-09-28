import React from 'react';

import Item from './Item';
import FullWidthItem from './FullWidthItem';

import './styles.css';

const MenuView = () => {
	return (
		<div className="header-menu">
			<Item />
			<Item />
			<FullWidthItem />
		</div>
	)
};

export default MenuView;