import React from 'react';
import T from 'prop-types';

import './styles.css';

const MenuFullWidthItemView = ({ title, options, setNode }) => {
	return (
		<div className="header-menu-full-width-item" ref={setNode}>
			<button>{title}</button>
		</div>
	)
};

MenuFullWidthItemView.propTypes = {
	title: T.string.isRequired,
	options: T.array.isRequired,
	setNode: T.func.isRequired,
};

export default MenuFullWidthItemView;