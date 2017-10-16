import React from 'react';
import T from 'prop-types';

import './styles.css';
import Content from './Content';

const ModalView = ({ children, show, setNode, current }) => {
	return (
		<div ref={setNode} className="modal" style={{ display: show ? 'flex' : 'none' }}>
			<Content current={current} children={children} />
		</div>
	);
};

ModalView.propTypes = {
	show: T.bool.isRequired,
};

export default ModalView;