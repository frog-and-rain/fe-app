import React from 'react';
import T from 'prop-types';

import Menu from './Menu';
import './styles.css';
import logo from './image/logo.png';

const HeaderView = ({ setNode }) => {
	return (
		<div ref={setNode} className="header">
			<div className="header-content">
				<div className="header-content-logo">
					<img src={logo} width={72} height={72} alt="logo" />
				</div>
				<Menu />
			</div>
		</div>
	)
};

HeaderView.propTypes = {
	setNode: T.func.isRequired,
};

export default HeaderView;