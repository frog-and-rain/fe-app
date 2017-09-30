import React from 'react';
import T from 'prop-types';

import ItemContent from './ItemContent';
import './styles.css';

const MenuItemView = ({ title, options, setNode, fullWidth }) => {
	return (
		<li ref={setNode} className="header-menu-item">
			<a className="header-main-menu-title" href="">{title}</a>
			<ItemContent options={options} fullWidth={fullWidth} border />
		</li>
	)
};

MenuItemView.propTypes = {
	title: T.string.isRequired,
	options: T.array.isRequired,
	setNode: T.func.isRequired,
};

export default MenuItemView;