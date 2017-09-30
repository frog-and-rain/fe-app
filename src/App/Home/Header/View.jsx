import React from 'react';

import Menu from './Menu';
import './styles.css';
import logo from './image/logo.png';

const HeaderView = () => {
	return (
		<div className="header">
			<div className="header-content">
				<div className="header-content-logo">
					<img src={logo} width={72} height={72} alt="logo" />
				</div>
				<Menu />
			</div>
		</div>
	)
};

export default HeaderView;