import React from 'react';
import T from 'prop-types';

import './styles.css';

const ButtonView = ({ title, styles }) => {
	return (
		<button className={styles ? styles : 'btn-default'}>{title}</button>
	)
};

ButtonView.propTypes = {
	title: T.string.isRequired,
	styles: T.string,
};

export default ButtonView;