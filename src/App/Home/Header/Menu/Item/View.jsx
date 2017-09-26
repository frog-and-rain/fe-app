import React from 'react';
import T from 'prop-types';

import './styles.css';

const MenuItemView = ({ title, options }) => {
	return (
		<div className="header-menu-item">
			<button>{title}</button>
			<ul className="header-menu-item-content">
				{
					options.map(item => (
						<div key={item.text} className="header-menu-item-content-item">
							<li>
								<a href={item.link}>{item.text}</a>
							</li>
							<hr />
						</div>
					))
				}
			</ul>
		</div>
	)
};

MenuItemView.propTypes = {
	title: T.string.isRequired,
	options: T.array.isRequired,
};

export default MenuItemView;