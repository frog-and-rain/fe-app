import React from 'react';

import Menu from './Menu';
import './styles.css';

const HeaderView = () => {
	return (
		<div className="header">
			<div className="header-content">
				<div className="header-content-logo">Logo</div>
				<div className="header-content-menu">
					<Menu />
				</div>
			</div>
		</div>
	)
};

export default HeaderView;