import React from 'react';
import T from 'prop-types';

import Item from '../../ItemContent';
import './styles.css';

const MenuItemView = ({ title, options }) => {
	return (
		<div className="header-menu-item">
			<button>{title}</button>
			<div className="header-menu-item-content">
				<Item options={options} border />
			</div>
		</div>
	)
};

MenuItemView.propTypes = {
	title: T.string.isRequired,
	options: T.array.isRequired,
};

export default MenuItemView;